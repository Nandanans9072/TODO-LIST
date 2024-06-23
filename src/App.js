import logo from './logo.svg';
import './App.css';
import { useState , useEffect} from 'react';

function App() {
 const [todos, settodos] = useState([])
 const [todo,settodo]= useState('')
 const [currentday,setCurrentDay]= useState('')

 useEffect(() => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();
  setCurrentDay(days[today]);
}, []);

const addtodo = () => {
  if (todo.trim() !== '') {
    settodos([...todos, { id: Date.now(), text: todo, status: false }])
    settodo('')
  }
}

const deletetodo = (id) => {
  settodos(todos.filter(obj => obj.id !== id))
}
   return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {currentday} 🌝📍 </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>settodo(e.target.value)}type="text" placeholder=" Add item...🖊️" />
        <i onClick={()=>settodos([...todos,{ id:Date.now(),Text: todo,status:false}])}className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { todos.map((obj)=>{

           return ( <div className="todo">
            <div className="left">
              <input onChange={(e)=>{
                console.log(e.target.checked)
                console.log(obj)
                settodos(todos.filter(obj2=>{
                  if(obj2.id===obj.id){
                      obj2.status=e.target.checked
                  }
                  return obj2
                })) 
              }}value={obj.status} type="checkbox" name="" id="" />
              <p>{obj.Text}</p>
            </div>
            <div className="right">
            <i className="fas fa-times" onClick={()=> deletetodo(obj.id)}></i>
            </div>
          </div>)
        })}
        {todos.map((obj)=>{
          if(obj.status){
              return(<h1>{obj.Text}</h1>)
          }
          return null
          })}
      </div>
    </div>
  );
}

export default App;
