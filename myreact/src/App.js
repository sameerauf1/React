import './App.css'; 
function App() { 
  let title = "Welcome"; 
  const person = {name: 'Bob', age: 30}; //this is an object 
  const goog = "http://www.google.com"; 

  const clickHandler1 = () => {
     console.log("Event 1 was fired.");
     } 
     const clickHandler2 = (msg) => { 
       console.log(msg); 
     }
     const clickChangeTitle = () => { 
       title = "Hello"; 
       console.log("Hello"); 
    }
    return(
      <div classNme = 'App'>
        <h3> {title}</h3>
        <p> {person.name} is {Math.random() * person.age} years of old.</p>
        <a href = {goog}>Google</a><hr/>
      </div>
    );
}
export default App;