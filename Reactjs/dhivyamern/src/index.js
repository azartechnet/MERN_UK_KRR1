import React from "react";
import ReactDOM from "react-dom/client";

/*const Sample=()=>{
  return(
    <div>
      <label>UserName</label>
      <input type="text" placeholder="Enter your name" />
      <label>Password</label>
      <input type="password" placeholder="Enter your password" />
      <button>Login</button>
    </div>
    )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Sample/>);*/

//Dynamic Rendering

/*const App=()=>{
  return(
    <div>
      <h1>Dynamic Rendering</h1>
      <p>Todays Day::{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App/>); //This will render the App component in the root <div>*/

//React JSX

/*const myelm=<h1>Welcome to the JSX</h1>
const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(myelm); //This will render the JSX in the root <div>*/

//Without JSX

/*const my1=React.createElement('h1',null,'welcome')
const my2=React.createElement('p',null,'This is a paragraph')
const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(React.createElement('div',null,my1,my2)); //This will*/

//React List

/*const Myelem=()=>{
  const list=[1,2,3,4,5,6,7,8]
  return(
    <div>
       <h1>My List</h1>
       <ul>
        {list.map((item,index)=><li key={index}>{item}</li>)}
       </ul>

    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>)*/

/*const Myelem=()=>{
  return(
    <div>
      <h1>My List</h1>
      <ul>
        <list>list1</list>
        <list>list2</list>
        <list>list3</list>
      </ul>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>)*/

//Fragement Tag

/*const My1=()=>{
  return(
    <>
    <h1>Welcome</h1>
    <h2>Welcome</h2>

    </>
  )   
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<My1/>)*/

/*const Myelem=()=>{
  const username="mohamed"
  return(
    <div>
        <h1>Welcome{username}</h1>
        <h2>{5+5}</h2>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>)*/

//React Conditional Rendering

/*const x=100
let text=""
if(x>10){
  text="Greater than 10"
}
else{
  text="Less than 10"
  }
  const Myelem=()=>{
    return(
      <div>

        <h1>{text}</h1>

      </div>
    )
  }
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>)*/

//Function Component

/*function Sample(props)
{
   return(
    <div>
      <h1>Welcome{props.name}</h1>
    </div>
   )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="azar"/>)*/

/*function Sample(props)
{
  return(
    <>
      <h1>Welcome to Function</h1>
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name={"azar"} age={"25"}/>)  //Passing props to*/

/*class Sample extends React.Component
{
   render()
   {
    return(
      <>
        <h1>Welcome to the class component</h1>
      </>
    )
   }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Component in Component

/*function Sample()
{
  return(
    <>
    <h1>I am a Sample!!</h1>
    </>
  )
}
function Sample2()
{
  return(
    <>
    This is Sample2
    <Sample/>
    </>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample2/>)*/

//Component with Files

/*import './index.css';

function Sample()
{
  return(
    <h1>Welcome</h1>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

import Emp from "./App";

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Emp/>)