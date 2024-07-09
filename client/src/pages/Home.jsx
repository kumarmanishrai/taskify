import React from "react";
import { useState, useEffect } from "react";
import Item from "../components/Item";

import axios from "axios";
import InputContainer from "../components/InputContainer";

const Home = () => {
  const [todo, setTodo] = useState([]);
  const [inpText, setInpText] = useState("");
  const [areaText, setAreaText] = useState("");

  const reloadData = () => {
    axios
      .get("http://localhost:5000/getTodo")
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));

    console.log(todo);
  };
  useEffect(() => {
    reloadData();
  }, []);

  const addTodo = () => {
    axios
      .post("https://mern-todo-u4aa.vercel.app/createTodo", {
        heading: inpText,
        note: areaText,
        currStatus: "pending",
      })
      .then((res) => {
        console.log(res.data);
        setInpText("");
        setAreaText("");
        reloadData();
      })
      .catch((err) => console.log(err));
  };

  const changeStatus = (_id, currStatus) => {
    if (currStatus === "done") {
      alert("already done");
      return;
    }
    axios
      .post(`https://mern-todo-u4aa.vercel.app/changeStatus/${_id}`)
      .then((res) => {
        reloadData();
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const deleteTodo = (_id) => {
    axios
      .get(`https://mern-todo-u4aa.vercel.app/deleteTodo/${_id}`)
      .then((res) => {
        reloadData();
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="Home">
      <InputContainer />

      <div className="notes">
        {todo.map((item) => (
          <Item
            key={item._id}
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
