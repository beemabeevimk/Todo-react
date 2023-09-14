import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import Comp1 from "./components/comp1";
import Comp2 from "./components/Comp2";
import {sample} from './context'
import Comp3 from "./components/Comp3";




function App() {
  const [count, setCount] = useState(10);

  const [ToDos, setToDos] = useState([]);

  const [toDo, setToDo] = useState("");

  useEffect(() => {
    inputRef.current.focus() }, []);

  const handleDelete = (taskId) => {
    const udatedToDos = ToDos.filter((obj) => obj.id !== taskId);
    setToDos(udatedToDos);
  };

  const addTask = () => setToDos([...ToDos, newTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toDo.trim() === "") {
      return;
    }

    if (ToDos.some((task) => task.text === toDo)) {
      alert("Task already exists!");
      return;
    }
    setToDo("");

    addTask();
  };

  const handleDeleteAll = () => {
    setToDos([]);
  };

  const newTask = { id: Date.now(), text: toDo, status: false };

  const inputRef = useRef(null);

  return (
    <>
    
    <div className="todolist">
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
        </div>

        <div className="input">
          <input
            ref={inputRef}
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
            type="text"
            placeholder="🖊️ Add item..."
          />
          <i onClick={handleSubmit} className="fas fa-plus"></i>
        </div>
        <div className="todos">
          {ToDos.map((obj) => {
            return (
              <div className="todo">
                <div className="left">
                  <input
                    onChange={(e) => {
                      console.log(e.target.checked);
                      console.log(obj);
                      setToDos( 
                        ToDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = e.target.checked;
                          }
                          return obj2;
                        })
                      );
                    }}
                    value={obj.status}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i
                    onClick={() => handleDelete(obj.id)}
                    className="fas fa-times"
                  ></i>
                </div>
              </div>
            );
          })}

          {ToDos.map((obj) => {
            if (obj.status) {
              return <h1>{obj.text}</h1>;
            }
            return null;
          })}
          <br />
          <button onClick={handleDeleteAll}>Delete All</button>
        </div>
      </div>

     
    </div>
    <sample.Provider value={{count,setCount}}>
    {/* <Comp1 />
    <Comp2 />
    <Comp3/> */}
    </sample.Provider>
    
       </>
  );
}

export default App;
