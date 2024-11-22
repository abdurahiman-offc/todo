import React from "react";
import { useState,useEffect } from "react";
import { CreateTodo } from "./testcomponents/CreateTodo";
import { ShowTodo } from "./testcomponents/ShowTodo";



function App() {
  const [todo, setTodo] = useState([]);
  const [todoCount,todoCounter] = useState(todo.length);
  console.log(todo);
  useEffect(()=>{
    document.getElementById("todocount").innerText = "your todo items " + todoCount
  },[todoCount])
  return (
    <div>
     
    <AppHeader description="create your to do list"></AppHeader>
    <CreateTodo todo={todo} setTodo={setTodo} todoCounter={todoCounter} todoCount={todoCount}></CreateTodo>
    <ShowTodo todo={todo}></ShowTodo>
    </div>
  );
}

const AppHeader = React.memo(function AppHeader({description}){
    return <div>
        <h1>My to do app</h1>
        <h2 id = "todocount">{description}</h2>
    </div>
})

export function Todocard({ children }) {
  return (
    <div
      style={{
        height: "100px",
        width: "400px",
        padding: "5px",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default App;
