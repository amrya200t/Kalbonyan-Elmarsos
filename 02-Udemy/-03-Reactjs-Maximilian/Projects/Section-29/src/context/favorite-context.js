import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (id) => {},
  itemIsFavorite: (id) => {},
});

const FavoriteContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (meetup) => {
    setUserFavorites((prevState) => [...prevState, meetup]);
  };

  const removeFavoriteHandler = (id) => {
    setUserFavorites((prevState) =>
      prevState.filter((meetup) => meetup.id !== id)
    );
  };

  const itemIsFavoriteHandler = (id) => {
    return userFavorites.some((meetup) => meetup.id === id);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
