import React from "react";
import Img from "../img/img2.png"

const Input= () =>{
 return(
      <div className="input">
          <input type="text" placeholder="Type Something"/>
          <div className="send">
               <img src={Img} alt="" />
               <input type="file" style={{display:"none"}} id="file"/>
               <label htmlFor="file">
                    <a className="attach"></a>
               </label>
               <button>Send</button>
          </div>
      </div> 
 )
}
export default Input 