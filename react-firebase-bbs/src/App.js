import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./comps/Header";
import MainNav from "./comps/MainNav";
import BBsMain from "./comps/BBsMain";
import Footer from "./comps/Footer";
import Write from "./comps/BBsWrite";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainNav />
        <section className="main_section">
          <Route exact path="/" component={BBsMain} />
          <Route exact path="/Write" component={Write} />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
