import { useContext } from "react";
import { FavoriteContext } from "../context/favorite-context";
import MeetupList from "../components/meetups/MeetupList";

const Favorites = (props) => {
  const favCtx = useContext(FavoriteContext);

  return (
    <section>
      <h1>My Favorites</h1>
      {favCtx.totalFavorites === 0 && (
        <p>You got no favorites yet. Start adding some?</p>
      )}
      {favCtx.totalFavorites > 0 && <MeetupList meetups={favCtx.favorites} />}
    </section>
  );
};

export default Favorites;
