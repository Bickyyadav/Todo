import { useEffect, useState } from "react";
import { MdCheck , MdDeleteForever} from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import "./Todo.css";

export default function Todo() {
    const [inputvalue, setinputvalue] = useState(""); 
    //we have to write the many task so we use in array
    const [task , settask] = useState([])  ;
    const [dateTime , setdateTime] = useState();


    //hanlding the use input to the input value in the state 
    const handleInputChange = (value)=>{
        setinputvalue(value); 

    }
 // this help to prvent the user input in the box till next  matlab erase nahi hone deta hya
    const handleFormSubmit = (event) =>{
        event.preventDefault();

         // if the value is empty then donot store the empty data
        if(!inputvalue) return ;

        //if the usertype one words two times then store one only
        if(task.includes(inputvalue)) {
            //if the user has input two same one then erase one 
            setinputvalue("");
            return ;
        }

        //set the previous data  and ... is a spread operator iska matlab aap previous rakho and new input last me add kardo
        settask((prevTask) => [...prevTask, inputvalue ]);

        //after writting the user make this to empy 
        setinputvalue("");

    }

useEffect(() => {
       //data and time 
const interval = setInterval(() =>{
    const now = new Date();
    const formattedDate = now.toLocaleDateString(); 
    const formattedtime = now.toLocaleTimeString();
    setdateTime(`${formattedDate} - ${formattedtime}`)

},1000);
return ()=>clearInterval(interval);

},[])


const handleTododelete = (value)=>{
    console.log(value);
    const updatetask = task.filter((curTask) => curTask !== value);   // task again reender to all state then it update
    settask(updatetask);
}

const clearallTodo = () => {
    settask([]);
}

const clearallexcept = (value)=>{
    console.log(value);
    const exceptthis = task.filter((curTask) => curTask === value);
    settask(exceptthis);
}


  return (
    <section className="todo-container">
        <header>
            <h1>Todo List</h1>
            <h2 className="Date-Time"> {dateTime}</h2>
        </header>
        <section className="form">
            <form onSubmit={handleFormSubmit} >
                <div>
                    <input type="text" className="todo-input" autoComplete="off" value={inputvalue}  onChange={(event)=>handleInputChange(event.target.value)}/>  
                </div>
                <div>
                    <button  type="submit" className="todo-btn" >Sumbit Me</button>
                </div>
            </form>
        </section>
        <section className="myUnOrdList">
            <ul>
                {
                    task.map((curTask,index) => {
                        return <li key={index} className="todo-item">
                            <span>{curTask}</span>
                            <button className="check-btn ">< MdCheck /></button>
                            <button className="delete-btn" onClick={() => handleTododelete(curTask)}  ><MdDeleteForever /></button>
                            <button className="delete-btn" onClick={() => clearallexcept(curTask)} ></button>
                        </li>
                    })
                }
            </ul>
        </section>
        <section>
            <button className="clear-btn" onClick={clearallTodo}> Clear All</button>
        </section>
    
    </section>
  )
}
