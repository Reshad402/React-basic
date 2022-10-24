import logo from './logo.svg';
import './App.css';

const num=100;
const singer ={
  name:'Sajib',
  age: 76
}
const singerStyle ={
  color:'red',
  backgroundColor:'white'
}

function App() {
  const nayoks =['Rubel','Manna','Bappa','Jasim','Riyaz','Razzak','Sanwar']
  const nayika =['Mousumi','Sabnur','Purnuma']
  return (
    <div className="app">
     
      <header className="App-header">
      {/* Adding the list for nayok */}
      {
        nayoks.map(nayok =><li>{nayok}</li>)
      }
      {/* Now making the person term dynamic */}
      {
        nayoks.map(nayok =><Person name={nayok}></Person>)
      }
      {
        nayika.map(nayika => <Person nayika={nayika}></Person>)
      }
      {/* First portion */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Bello</h3>
          <p>My is Hassan kore debo Massan</p>
        </div>
        <div className="total">
          <h4>Total:{num+200}</h4>
          <p style={singerStyle}>Name of the singer "{singer.name}" and his age is "{singer.age}"</p>
          <p style={{color:'black',backgroundColor:'yellow'}}>Name of the singer "{singer.name}" and his age is "{singer.age}"</p>
        </div> */}
        

{/* Second portition */}
{/* 
        <Person nayok="Reshad" nayika="Afrina"></Person>
        <Person nayok="Reshad" nayika="Shemanto"></Person>
        <p>Rock mama</p>
        <Friends actor="Fahad" actress="Shemanto"></Friends>
        <Friends actor="Mishu" actress="Shemanto"></Friends> */}
        {/* It is the form to make item from the array list */}
        {/* <Person nayok= {nayoks[0]} nayika={nayika[2]}></Person>
        <Person nayok= {nayoks[3]} nayika={nayika[1]}></Person> */}
        <p>Rock mama</p>
        {/* <Friends actor="Fahad" actress="Shemanto"></Friends>
        <Friends actor="Mishu" actress="Shemanto"></Friends> */}
        

        

      

      </header>
    
    </div>

  );
}

function Person(props){
  console.log(props)
  return (
    <div className='person'>
      <h2>{props.name}</h2>
      {/* je nam dibo ta er modde thakbe.
      <Person (nayok)= {nayoks[0]} nayika={nayika[2]}></Person> */}
      <p>{props.nayika}</p>
    </div>
  )
}
  function Friends(props){
    console.log(props)
    return (
      <div className="person2">
        <h2>{props.actor}</h2>
      <p>{props.actress}</p>
      </div>
    )
  }
export default App;




