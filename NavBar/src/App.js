import React from 'react';
import './index.css';
import Navbar from "./Components/Navbar"
import NavItem from "./Components/NavItem"
import DropdownMenu from "./Components/DropdownMenu"

function App() {
  return (
    <Navbar> 
      <NavItem icon="😂" />
      <NavItem icon="😂" />
      <NavItem icon="😍">
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}



export default App;
