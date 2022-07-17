import './App.css'; 
import {useState} from "react"; 
function App() { 
  //let title = "Welcome"; 
  const[title, setTitle] = useState("Welcome");
  const person = {name: 'Bob', age: 30}; //this is an object 
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
       setTitle("Hello");
    }
    return(
      <div className = 'App'>
        <h3> {title}</h3>
        <p> {person.name} the builder is {Math.random() * person.age} years of old.</p>
        <a href = {goog}>Google</a><hr/>
        <button onClick={clickHandler1()}>Handler1</button> 
        <button onClick={clickHandler2("Is event 2 fired?")}>Handler2</button>
        <button onClick={clickChangeTitle}>Change to Hello </button><br/> 
        <button onClick={clickHandler1}>Handler3</button> 
        <button onClick={() =>{clickHandler2("Is event 2 fired through inline?")}}>Handler4</button> 
      </div>
    );
}
export default App;