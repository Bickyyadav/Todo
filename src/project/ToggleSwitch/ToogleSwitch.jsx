import "./ToogleSwitch.css"
import {useState} from "react";

export const  ToogleSwitch = () => {
    const [IsOn , setIsOn] = useState(false);

    const handleToogleSwitch = ()=>{
setIsOn(!IsOn);
    };

    const checkIsOn = IsOn ? "On": "Off"
     
  return (
    // we can do thsi in child span also or in paretns also because when i run it call to parents also
    <div className="toogle-switch"  style={{backgroundColor:IsOn ? "#4caf50" : "#f44336" }}onClick={handleToogleSwitch }>  
<div className= {`switch ${checkIsOn}`} >
    <span className= "switch-state" > 
        {checkIsOn}  
    </span>
</div>
</div>

  )
}
