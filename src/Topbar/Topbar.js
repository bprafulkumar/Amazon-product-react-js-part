import React from "react";
import Classes from './Topbar.module.css'


const topbar = (props) => {
    return(
        <div>
        <header>
            <nav className={Classes.topbar}>
               <img src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg' alt='amazon log'/>
            </nav>
         </header>
        </div>
    )
}
export default topbar