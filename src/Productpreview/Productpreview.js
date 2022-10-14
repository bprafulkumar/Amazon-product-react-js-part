import React from "react";
 import Classes from "./Productpreview.module.css"

const Productpreview = (props)=> {
    // console.log(props)
    const currenthour = new Date().getHours()> 9 ? new Date().getHours() : '0'+ new Date().getHours()
    const currentminute = new Date().getMinutes() >9 ? new Date().getMinutes() : '0'+ new Date().getMinutes()
    return(
        <div className={Classes.productpreview}>
            <img src={props.currentpreviewimage} alt={props.styleName}/>

            
            {
                props.Showheartbeat ?                                                                             <div className={Classes.Heartbeatsection}>
                    <i className="fa-solid fa-heart-pulse"></i>
                    <p>72</p>
                 </div> :
                 <div className={Classes.Timesection}>
                 <p className={Classes.date}>{`${currenthour}:${currentminute}`}</p>
                 </div>

            }

           
        </div>
    )
}

export default Productpreview