import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionComponent from './Components/FunctionComponent';
import {useState} from "react";

function App() {
  const author="Aaisha Khan";
  const [name,setName]=useState("DT");
  return (
    <div className="App">

       <p>Class Component</p>
       <ClassComponent/>  
       <ClassComponent/>  
       <ClassComponent/>            
       <br/>

       <p>Function Component</p>
       {/* <FunctionComponent name={"Pathan"} age={21} author='Aaisha Khan'/>  */}
       <FunctionComponent name={name} age={21} author={author} setName={setName}/> 
       {/* <FunctionComponent/>          
       <FunctionComponent/> 
       <FunctionComponent/> 
       <FunctionComponent/> 
       <FunctionComponent/> 
       <FunctionComponent/>  */}
    </div>
  );
}

export default App;
