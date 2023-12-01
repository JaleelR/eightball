import './EightBall.css';
import { React, useState } from "react";
const EightBall = ({ answers }) => {
    const [question, setQuestion] = useState("Think of a question");
    const [color, setColor] = useState("Black");

    const getNewMsg = () => {
    let answer = answers[Math.floor(Math.random() * answers.length)];  
        setQuestion(answer.msg) 
       setColor(answer.color)
    }
 return (
        <>
            <div className='eightball' >
             <div className="question" style={{ backgroundColor: color }} >      
    <p> {question} </p>      
        </div>
                <button onClick={getNewMsg}> Get Answer</button>
          </div>       
        </>      
)
}

export default EightBall;
// style = {{ backgroundColor: answer.color }}



/*
function choice(arr) {
 let answer = answers[Math.floor(Math.random() * answers.length)];    

 function EightBall(props) {
 const [msg, setMsg] = userState("think of a Question");
 const [color, setColor] = useState("Black");
  }

  function handleClick() {
  const {msg, color} = choice(props.answer);
  setMsg(msg);
  setColor(color);
  }
  return (
  div 
  className = 'Eight';
  onClick={handleClick}
  style={{ backgroundCOlor: Color}}
  )
  }
}
*/