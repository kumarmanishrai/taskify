import React from "react";
import { useState, useEffect } from "react";
import Item from "../components/Item";

import axios from "axios";

const Home = () => {
  
  // const url = "https://mern-todo-0k5p.onrender.com";
  const url = "http://localhost:5000";

  const [todo, setTodo] = useState([]);
  const [inpText, setInpText] = useState('')
  const [areaText, setAreaText] = useState('');

  const reloadData = () => {
  const token = localStorage.getItem("token")

    axios
      .get(`${url}/getTodo`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      })
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));

    console.log(todo);
  };
  useEffect(() => {
    reloadData();
  }, []);

  const addTodo = () => {
    const token = localStorage.getItem("token")
    console.log(token);

    axios
      .post(`${url}/createTodo`, {
        heading: inpText,
        note: areaText,
        currStatus: "pending",
        
      },{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      }
    )
      .then((res) => {
        console.log(res.data);
        setInpText("");
        setAreaText("");
        reloadData();
      })
      .catch((err) => console.log(err));
  };

  const changeStatus = (_id, currStatus) => {
    const token = localStorage.getItem("token")

    if (currStatus === "done") {
      alert("already done");
      return;
    }
    axios
      .post(`${url}/changeStatus/${_id}`,{}, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      })
      .then((res) => {
        reloadData();
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };


  const userLogout = () => {
    localStorage.removeItem("token");
    window.location.href = '/login'
  }


  const deleteTodo = (_id) => {
  const token = localStorage.getItem("token")

    axios
      .get(`${url}/deleteTodo/${_id}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      })
      .then((res) => {
        reloadData();
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };




  return (
    <div className="Home">
      <div className="logoutBtn">
        <button  onClick={userLogout}>Logout</button>
      </div>
      <div className='InputContainer'>
        <div className="input-container">
        <input
          value={inpText}
          onChange={(e) => {
            setInpText(e.target.value);
          }}
          type="text"
          id="inp"
          className="input dark"
          placeholder="Type here..."
        />
        <textarea
          value={areaText}
          onChange={(e) => {
            setAreaText(e.target.value);
          }}
          id="text-area"
          className="textarea dark"
          placeholder="Type here..."
          rows="4"
        ></textarea>
        <button onClick={addTodo} className="button save dark">
          Save
        </button>
      </div>
    </div>

      <div className="notes">
        {todo.map((item) => (
          <Item
            key={item._id.toString()}
            heading={item.heading}
            text={item.note}
            remove={() => deleteTodo(item._id)}
            currStatus={item.currStatus}
            changeStatus={() => changeStatus(item._id, item.currStatus)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
