import logo from './logo.svg';
import './App.css';
import './Styles.css';
import SRC from "./Image/SRC.png" ;

function App() {
  let YourName= "AbdEl-Rahman "
  return (
    <div className="App">
        <h1 className="Title red ">{YourName}</h1> 
          <br/>
          <img  src = "/image/Public.png" className="image"/>
          <br/>
          <img  src = {SRC} className="image"/>
          <br/>
          <video src = "/video/DOOR.mp4" className="video" type = "video/mp4" controls/>
    </div>
  );
}

export default App;
