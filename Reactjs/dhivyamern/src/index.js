import React, { useState,useEffect } from "react";
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

/*import Emp from "./App";

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Emp/>)*/

//Conditional Rendering

//Else if ladder

/*const Gradesystem=()=>{
  let marks=80;
  if(marks>=90)
  {
    return <h1>Grade A</h1>
  }
  else if(marks>=80)
  {
    return <h1>Grade B</h1>
    }
    else if(marks>=70)
    {
      return<h1>Grade C</h1>
    }
    else
    {
       return<h1>Grade D</h1>
    }
    // return(
    //   <div>
    //     <h1>Grade System</h1>
    //     <p>Enter your marks</p>
    //     <input type="number" id="marks" />
    //     <button onClick={Gradesystem}>Submit</button>
        
    //   </div>
    // )
    }
   
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Gradesystem/>)*/

    //Switch Statement
    
    /*const Getgrade=(score)=>{
      
      switch(true)
      {
         case score>=90:
          return <h1>Grade A</h1>
          break;
          case score>=80:
            return <h1>Grade B</h1>
            break;
            case score>=70:
              return <h1>Grade C</h1>
              break;
              default:
                return <h1>Grade D</h1>
                }
    }
    const GradeComponent=()=>{
      const score=80;
      const grade=Getgrade(score);
      return(
        <div>
          <h1>Grade System{grade}</h1>

        </div>
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<GradeComponent/>)*/

    //Changing the state object

    /*class Sample extends React.Component
    {
      constructor()
      {
        super();
        this.state={
          emp:{
            name:"Rahul",
            age:25,
            salary:50000
            },
            showData:false
        };
      }
      showData()
      {
          this.setState({showData:true})
      }
      hideData()
      {
        this.setState({showData:false})
      }
      render()
      {
        let data;
        if(this.state.showData==true)
        {
          data=<div><b>City:{this.state.emp.city}</b>
                  <b>Empname:{this.state.emp.name}</b>
                  <b>Age:{this.state.emp.age}</b>
                  <b>Salary:{this.state.emp.salary}</b>
                  <button onClick={this.hideData.bind(this)}>HideData</button>
          </div>
        }
        else
        {
           data=<div><button onClick={this.showData.bind(this)}>ShowData</button></div>
        }
        return(
          <div>
            {data}
          </div>
          )
          }
          }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Sample/>)*/

    //Using Constructor
    /*class Sample extends React.Component
    {
      text="welcome"
      constructor()
      {
        super();
        this.state={f1:'red'}
      }
      render()
      {
        return(
          <div>
            <h1 style={{color:this.state.f1}}>Hello</h1>
            <p>{this.text}</p>
          </div>
          
        )
      }
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Sample/>)*/

    //React Event
    /*function Football()
    {
      const shoot=()=>{
        alert("Goal")
      }
      return(
        <div>
          <button onClick={shoot}>Shoot</button>
        </div>
        )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))

    r1.render(<Football/>) */

    //Another Program

    /*function Football()
    {
      const shoot=(a)=>{
        alert("Goal Shooted"+a)
      }
      return(
        <div>
          <button onClick={()=>shoot("ByMessi")}>Shoot</button>
        </div>
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Football/>)*/

    //React List

   /*function Car(props)
   {
      return<li>I am a{props.brand}</li>
   }
   function Garage()
   {
     const cars=[
      {id:1,brand:'Ford'},
      {id:2,brand:'Toyota'},
      {id:3,brand:'Honda'}
     ];
     return(
      <div>
        <ul>
          {cars.map((car)=><Car key={car.id} brand={car.brand}/>)}

        </ul>
      </div>
     )
   }
   const r1=ReactDOM.createRoot(document.getElementById('root'))
   r1.render(<Garage/>)*/

   //React getDerivedStateFromProps

   /*class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    static getDerivedStateFromProps(props, state) {
      console.log("getDerivedStateFromProps called");
      if (props.count !== state.count) {
        return { count: props.count };
      }
      else
      {
        return null; 
      }
      // No state update needed
    }
  
    render() {
      return (
        <div>
          <h1>Header</h1>
          <p>Count: {this.state.count}</p>
        </div>
      );
    }
  }
  
  const r1 = ReactDOM.createRoot(document.getElementById('root'));
  
  // Pass a 'count' prop when rendering the component
  r1.render(<Header count={10} />);*/

  //ComponentDidMount

  // setTimeout executes the code only once after the specified delay, 
//  setInterval executes the code repeatedly at the specified interval.
//ComponentWillUnmount clears the timer when the component is about to be
// removed from the DOM to prevent memory leaks

/*class TimerComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      seconds:0,
    }
  }
  componentDidMount()
  {
    console.log("componentDidMount called");
    this.timerID = setInterval(
      () => this.setState({ seconds: this.state.seconds + 1 }),
      1000
      );
  }
  componentWillUnmount()
  {
    console.log("componentWillUnmount called");
    clearInterval(this.timerID);

  }
  render()
  {
     return(
      <div>
        <p>Time: {this.state.seconds}</p>

      </div>
     )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<TimerComponent/>)*/


//Updating getDerviedStateFromprops

/*class Header extends React.Component
{
   constructor(props)
   {
    super(props);
    this.state={empname:"Azar"}
}
static getDerviedStateFromProps(props,state)
{
  console.log("getDerviedStateFromProps called");
  return {empname:props.name};
}
changeEmployee=()=>{
  this.setState({empname:"Rahul"})
}
render()
{
  return(
    <div>
      <h1>{this.state.empname}</h1>
      <button onClick={this.changeEmployee}>Change Employee</button>

    </div>
  )
}
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header name="Azar"/>)*/

//ShouldComponentUpdate
/*class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={empname:"Azar"}
  }
  changeEmployee=()=>{
    this.setState({empname:"Rahul"})
    }
    shouldComponentUpdate(nextProps,nextState)
    {
      console.log("shouldComponentUpdate called");
      return true;
      }
      render()
      {
        return(
          <div>
            <h1>{this.state.empname}</h1>
            <button onClick={this.changeEmployee}>Change Employee</button>
            </div>
            )
            }

}
 
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header name="Azar"/>)*/

//React Hooks useState()

/*function Counter()
{
  const[count,setCount]=useState(0);
  const [name,setName]=useState("mohamed");
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <h1>Name:{name}</h1>
      <button onClick={()=>setName("Azar")}>Change Name</button>

    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//React useEffect

/*function Timer()
{
  const[count,setCount]=useState(0);
  useEffect(()=>{
    const intervalId=setInterval(()=>{
      setCount(count+1);
      },1000);
      return()=>{
        clearInterval(intervalId);
        }
        },[count]);
        return(
          <div>
            <h1>Count:{count}</h1>
            
          </div>
        )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Timer/>)*/

//UseEffect()

/*function ClickCounter()
{
  const [count,setCount]=useState(0)
  useEffect(()=>{
    document.title="You clicked "+count+" times"
    },[count])
    return(
      <div>
        <button onClick={()=>setCount(count+1)}>Click me</button>
        <h1>Count:{count}</h1>
      </div>
      )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<ClickCounter/>)*/

//With out useContext

/*function Component1()
{
  const [user,setUser]=useState("mohamed");
  return(
    <div>
      <h1>Component1</h1>
      <p>User:{user}</p>
      <Component2 user={user}/>
    </div>
    )
}
function Component2(props)
{
  return(
    <div>
      <h1>Component2</h1>
      <p>User:{props.user}</p>
      
    </div>
    )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Component1/>)*/

    //React useContext

/*import { createContext, useContext } from "react";
// Create a context
const UserContext = createContext();

function Component1() {
  // Use context inside Component1
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Component1</h1>
      <p>User: {user}</p>
      <Component2 />
    </div>
  );
}

function Component2() {
  // Use context inside Component2
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Component2</h1>
      <p>User: {user}</p>
    </div>
  );
}

// Render the components
const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(
  <UserContext.Provider value={"Rahul"}>
    <Component1 />
  </UserContext.Provider>
);*/

//React useRef()--Task








    
