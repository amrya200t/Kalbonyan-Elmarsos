import React, { Fragment, useContext } from "react";

import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";
import { AuthContext } from "./context/auth-context";

const App = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Fragment>
      {!authCtx.isAuth && <Auth />}
      {authCtx.isAuth && <Ingredients />}
    </Fragment>
  );
};

export default App;
