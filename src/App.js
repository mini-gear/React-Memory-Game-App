import Cards  from "./components/cards";
import {Helmet} from "react-helmet";

function reload() {
  window.location.reload()
}

function App() {
  return (<>
  
  <head>
    <title>Memory Game</title>
    <meta name="description" content="Memory Game made by Ayaan Ul Hasan"/>
 </head>
    <div className="App">
    
      <h1>Memory Game</h1>
      <center><button onClick={reload}>New Game</button></center>
      
      <Cards></Cards>

     
    </div></>
  );
}

export default App;
