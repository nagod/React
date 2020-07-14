import React,{useState} from 'react'
import {CSSTransition} from "react-transition-group"
export default function DropdownMenu() {
    
    const [activeMenu, setActiveMenu] = useState('main')
    function DropdownItem(props){
       return(
           <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)} >
               <span className="icon-button">{props.leftIcon}</span>
               {props.children}
               <span className="icon-right">{props.rightIcon}</span>
           </a>
       ) 
    }
    return (
        <div className="dropdown">
            <CSSTransition 
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                >
                <div className="menu">
                    <DropdownItem leftIcon="😍">a</DropdownItem>
                    <DropdownItem goToMenu="settings">Settings</DropdownItem>
                    <DropdownItem>c</DropdownItem>
                    <DropdownItem>d</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition 
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                classNames="menu-secondary"
                >
                <div className="menu">
                    <DropdownItem goToMenu="main">Back</DropdownItem>
                    <DropdownItem>Profil</DropdownItem>
                    <DropdownItem>Help</DropdownItem>
                    <DropdownItem>AGB</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}
