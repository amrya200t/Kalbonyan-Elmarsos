import React, { useMemo } from "react";
import classes from "./DemoList.module.css";

const DemoList = (props) => {
  console.log("DemoList");

  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("Item sorted");
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
