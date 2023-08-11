
import Home from "./components/home";
import Modal from "./components/modal";

import { useState } from "react";


function App() {

  const [modalIsOpen, setmodalIsOpen] = useState(true)

  const closeModal = () =>{
    setmodalIsOpen(false)


  }

  return (
    <div className="App">
        {
          modalIsOpen && (
            <Modal closeModal={closeModal}/>
          )
        }
        
        <Home/>
    </div>
  );
}

export default App;
