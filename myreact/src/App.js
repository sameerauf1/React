import './App.css'; 
import {useState} from "react"; 
function App() { 
  //let title = "Welcome"; 
  const[title, titleFunction] = useState("Welcome"); //initial statee
  const person = {name: 'Bob', age: 30}; 
  const goog = "http://www.google.com"; 
  const clickHandler1 = () => {
     console.log("Event 1 was fired.");
     } 
  const clickHandler2 = (msg) => { 
       console.log(msg); 
     }
  const clickChangeTitle = () => { 
       //title = "Hello"; 
       //console.log("Hello"); 
       titleFunction("Hello"); // state that it will be changed to
    }
    return(
      <div className = 'App'>
        <h3> {title}</h3>
        <p> {person.name} the builder is {Math.random() * person.age} years of old.</p>
        <a href = {goog}>Google</a><hr/>
        <button  onClick={clickHandler1()}>Handler1</button> 
        <button onClick={clickHandler2("Is event 2 fired?")}>Handler2</button>
        <button id = "change" onClick={clickChangeTitle}>Change to Hello </button><br/> 
        <button onClick={clickHandler1}>Handler3</button> 
        <button onClick={() =>{clickHandler2("Is event 2 fired through inline?")}}>Handler4</button> 
      </div>
    );
}
export default App;