

function EventHandling() {

    // this is oldverisonfunciton 
    function handleButtonClick(){
        alert("hey there")
    }

    const handleButtonClick1 = ()=>{
        alert("hey there1")
    }
    const handlewelcomeClick = (user)=>{
        alert( `my name i ${user}`)
    }




  return (
    <div> 
        {/* //function component with named fucntion  */}
        <button onClick={handleButtonClick}> click me</button>
        <br/>
        {/* calling funciton in arrow function or inline funciton like () putting this  we have to call */}
        <button onClick={() => handleButtonClick1 ()}> click me1</button>  
{/* function component with inline arrow function */}
<button onClick={() => alert('hey there i am form the alert ')}> click me3</button>  

{/* //passing something to the arrow */}
<button onClick={()=>handlewelcomeClick("bicky")}> click me</button>


          </div>    
  )
}

export default EventHandling