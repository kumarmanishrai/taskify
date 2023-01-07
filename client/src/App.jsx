import { useState, useEffect } from 'react'
import Item from './components/Item'
import axios from 'axios'

import './App.css'


function App() {

  const [todo, setTodo] = useState([])
  const [inpText, setInpText] = useState('')


  const reloadData = () => {
    axios.get("http://localhost:5000/getTodo")
      .then(res => setTodo(res.data))
      .catch(err => console.log(err))
  }
  useEffect(()=> {
    reloadData()
  }, [])


  
  const addTodo = () => {
    axios.post("http://localhost:5000/createTodo", {note: inpText})
      .then(res => {
        console.log(res.data);
        setInpText("")
        reloadData()
      })
      .catch((err) => console.log(err));
  }

  const deleteTodo = (_id) => {
    axios.get(`http://localhost:5000/deleteTodo/${_id}`)
    .then((res) => {
      reloadData()
      console.log(res.data)
    })
    .catch((err) => console.log(err));
  }
 

  return (
    <div className="App">
      <div className="inp-area">
        <input 
          value= {inpText}
          onChange={(e)=> setInpText(e.target.value)} type="text" id="inp"  placeholder='type here..' />
        <button onClick={addTodo}>Save</button>
      </div>

      <div className="notes">
        {todo.map(item => <Item 
          key = {item._id}
          text = {item.note}
          remove = {() => deleteTodo(item._id)}
        />
        )}

      </div>
    </div>

  )
}

export default App
