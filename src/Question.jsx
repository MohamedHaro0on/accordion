import {useState} from "react";

const Question = ({title , info})=>{
    const [toggle , setToggle  ] = useState (false);

    const ToggleHandler = () =>{
        setToggle (prevState => !prevState);
    }
    return (
        <article className = "Question">
            <h2>{title} <button onClick = {ToggleHandler}> {toggle ? "-" : "+"}</button></h2>
            {toggle &&  <p>{info}</p>}
        </article>
    )
}
export default Question