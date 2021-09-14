import "./App.css";
import BuckMain from "./comps/BuckMain";
import Footer from "./comps/Footer";
import BackImage from "./comps/img/background.png";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${BackImage})`,
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: `scroll`,
    backgroundSize: "contain",
  };

  return (
    <div className="App">
      <header className="App-header" style={backgroundStyle}></header>
      <section className="w3-container w3-margin">
        <BuckMain />
      </section>
      <Footer />
    </div>
  );
}

export default App;
