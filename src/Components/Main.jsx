import React from "react";
import'./s.css'
const Main = (props) => {
    return ( 
        <div className="main">
            {props.children}
        </div>
     );
}
 
export default Main;