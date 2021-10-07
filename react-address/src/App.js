import { useState } from "react";
import "./App.css";
import UUID from "react-uuid";
import AddressInput from "./comps/AddressInput";
import AddressList from "./comps/AddressList";
function App() {
  const [address, setAddress] = useState({
    a_id: UUID(),
    a_name: "",
    a_tel: "",
    a_addr: "",
    a_age: "",
  });
  const [addrBook, setAddrBook] = useState([]);
  const stateGroup = {
    address,
    setAddress,
    addrBook,
    setAddrBook,
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <AddressInput stateGroup={stateGroup} />
      <div className="address_listbox">
        <AddressList addrBook={addrBook} />
      </div>
    </div>
  );
}

export default App;
