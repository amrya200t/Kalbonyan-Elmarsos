import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { FavoriteContext } from "../../context/favorite-context";

const MeetupItem = (props) => {
  const favCtx = useContext(FavoriteContext);
  const itemIsFavorite = favCtx.itemIsFavorite(props.id);

  const toggleFavStatusHandler = () => {
    if (itemIsFavorite) {
      favCtx.removeFavorite(props.id);
    } else {
      favCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className={classes.actions}>
          <button onClick={toggleFavStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
