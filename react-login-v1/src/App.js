import "./App.css";
import Maincomps from "./comps/Maincomps";
import UserContextProvider from "./context/UserContextProvider";
import Header from "./comps/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <UserContextProvider>
        <Maincomps />
      </UserContextProvider>
    </div>
  );
}

export default App;
