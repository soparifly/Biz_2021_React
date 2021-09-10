import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./comps/Header";
import MainNav from "./comps/MainNav";
import BBsMain from "./comps/BBsMain";
import Footer from "./comps/Footer";
import BBsWrite from "./comps/BBsWrite";
import BBsDetail from "./comps/BBsDetail";
import { Switch } from "react-router";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainNav />
        <section className="main_section">
          <Route exact path="/" component={BBsMain} />
          <Switch>
            <Route exact path="/write/:id" component={BBsWrite} />
            <Route exact path="/write" component={BBsWrite} />
            <Route exact path="/detail/:id" component={BBsDetail} />
          </Switch>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
