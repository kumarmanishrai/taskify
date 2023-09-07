import { useState, useEffect } from 'react'
import Item from './components/Item'
import axios from 'axios'

import './App.css'


function App() {

  const [todo, setTodo] = useState([])
  const [inpText, setInpText] = useState('')
  const [areaText, setAreaText] = useState('')


  const reloadData = () => {
    axios.get("http://localhost:5000/getTodo")
      .then(res => setTodo(res.data))
      .catch(err => console.log(err))

    console.log(todo);
  }
  useEffect(()=> {
    reloadData()
  }, [])


  
  const addTodo = () => {
    axios.post("http://localhost:5000/createTodo", {heading:inpText, note: areaText, currStatus: "pending"})
      .then(res => {
        console.log(res.data);
        setInpText("")
        setAreaText("")
        reloadData()
      })
      .catch((err) => console.log(err));
  }

  const changeStatus = (_id, currStatus) => {
    if(currStatus ==="done"){
      alert("already done")
      return
    }
    axios.post(`http://localhost:5000/changeStatus/${_id}`)
    .then((res) => {
      reloadData()
      console.log(res.data)
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
      <div className="input-container">
      <input
        value={inpText}
        onChange={(e) => {setInpText(e.target.value)}}
        type="text"
        id="inp"
        className="input dark" 
        placeholder="Type here..."
      />
      <textarea
        value={areaText}
        onChange={(e) => {setAreaText(e.target.value)}}
        id="text-area"
        className="textarea dark"
        placeholder="Type here..."
        rows="4" 
      ></textarea>
      <button onClick={addTodo} className="button save dark">Save</button>
    </div>

      <div className="notes">
        {todo.map(item => <Item 
          key = {item._id}
          heading = {item.heading}
          text = {item.note}
          remove = {() => deleteTodo(item._id)}
          currStatus = {item.currStatus}
          changeStatus= {() => changeStatus(item._id, item.currStatus)}
        />
        )}

      </div>
    </div>

  )
}

export default App
