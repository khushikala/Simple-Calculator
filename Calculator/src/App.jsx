import   { useState } from 'react'
import './App.css'

function App() {
 const [input, setInput] = useState("")
  const handleClick = async (value) =>  {
    if (value === "C" ) {
      setInput("");
    }
    else if (value === "=") { 
      try{
      const res = await fetch("http://localhost:8080/api/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expr: input }),
      });
        
        // setInput(eval(input).toString());
      const result = await res.text();
      setInput(result);
      }
      catch(Error){
        setInput("Error");
      }
    }
     else{
        setInput((prev) => prev + value);
      }
  };

  const buttons = [
    "1", "2", "3", "/",
    "4", "5", "6", "*",
    "7", "8", "9", "-",
    "0", ".", "=", "+",
    "C"
  ];
  return (
    <>
     <div className="calculator-container">
      <div className="calculator">
        <div className="display"> {input ||"0"} </div>
          <div className="buttons">
         {buttons.map((btn) =>(
          <button key={btn} onClick={()=> handleClick(btn)}>
              {btn}
          </button>
          ))}
        </div>
      </div>
     </div>

    </>
  )
}

export default App
