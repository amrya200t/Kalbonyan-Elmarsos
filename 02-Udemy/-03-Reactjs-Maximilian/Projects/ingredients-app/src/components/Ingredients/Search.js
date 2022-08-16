import React, { useEffect, useState, useRef } from "react";
import useHttp from "../../hooks/http";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import "./Search.css";

const Search = React.memo((props) => {
  const inputRef = useRef();
  const [filter, setFilter] = useState("");
  const { onLoadedIngredients } = props;

  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (filter === inputRef.current.value) {
        const query =
          filter.trim().length === 0
            ? ""
            : `?orderBy="title"&equalTo="${filter}"`;

        sendRequest(
          "https://react-http-6e36b-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json" +
            query
        );
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, sendRequest, inputRef]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const filteredIngredients = [];
      for (const key in data) {
        filteredIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        });
      }

      onLoadedIngredients(filteredIngredients);
    }
  }, [data, isLoading, error, onLoadedIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <p>Loading...</p>}
          <input
            type="text"
            ref={inputRef}
            defaultValue={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
