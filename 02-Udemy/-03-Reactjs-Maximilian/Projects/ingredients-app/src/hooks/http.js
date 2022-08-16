import { useCallback, useReducer } from "react";

const initialState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifier: null,
};

const httpReducer = (currHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifier: action.identifier,
      };
    case "RESPONSE":
      return {
        ...currHttpState,
        loading: false,
        data: action.responseData,
        extra: action.extra,
      };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return initialState;
    default:
      throw new Error("Should not be reached!");
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

  const clear = useCallback(() => dispatchHttp({ type: "CLEAR" }), []);

  const sendRequest = useCallback((url, method, body, reqExtra, identifier) => {
    dispatchHttp({ type: "SEND", identifier });

    fetch(url, {
      method,
      body,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatchHttp({ type: "RESPONSE", responseData: data, extra: reqExtra });
      })
      .catch((error) => {
        dispatchHttp({ type: "ERROR", errorMessage: error.message });
      });
  }, []);

  return {
    isLoading: httpState.loading,
    error: httpState.error,
    data: httpState.data,
    sendRequest,
    extra: httpState.extra,
    identifier: httpState.identifier,
    clear,
  };
};

export default useHttp;
