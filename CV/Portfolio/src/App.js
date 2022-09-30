import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Routes from "./Routes/Routes";
import ScrollUpButton from "./Components/ScrollUpButton";

function App() {
  return (
    <>
      {/* NAVIGATION BAR */}
      <Header />

      {/* MAIN CONTENT => A PAGE */}
      <Routes />

      {/* FOOTER */}
      <Footer />

      {/* SCROLL TO THE TOP */}
      <ScrollUpButton />
    </>
  );
}

export default App;
