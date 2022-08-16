import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavoriteContext } from "../../context/favorite-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favCtx = useContext(FavoriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>

      <nav>
        <ul>
          <li>
            <NavLink to="/">All Meetups</NavLink>
          </li>
          <li>
            <NavLink to="/new-meetup">Add New Meetup</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">
              My Favorites
              <span className={classes.badge}>{favCtx.totalFavorites}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
