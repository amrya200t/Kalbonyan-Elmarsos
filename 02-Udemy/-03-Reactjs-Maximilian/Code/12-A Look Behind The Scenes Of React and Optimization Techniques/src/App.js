import React, { useState, useCallback, useMemo } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";

function App() {
  console.log("----------------------------");
  console.log("App");

  const [listTitle, setListTitle] = useState("My List");
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  const listItems = useMemo(() => [5, 10, 1, 4, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
  // return (
  //   <div className="app">
  //     <h1>Hi there!</h1>
  //     <DemoOutput show={showParagraph} />
  //     <Button onClick={allowToggleHandler}>Allow Toggling!</Button>
  //     <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
  //     {/* <Button onClick={toggleParagraphHandler}>
  //       {`${!showParagraph ? "Show" : "Hide"} Paragraph!`}
  //     </Button> */}
  //   </div>
  // );
}

export default App;
