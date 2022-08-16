import React from "react";
import { Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <AllMeetups />
      </Route>

      <Route path="/new-meetup">
        <NewMeetup />
      </Route>

      <Route path="/favorites">
        <Favorites />
      </Route>
    </Layout>
  );
}

export default App;
