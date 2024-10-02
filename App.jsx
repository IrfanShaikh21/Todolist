import Appname from "./component/Appname";
import TodoAdd from "./component/TodoAdd";
import Todoitems from "./component/Todoitems";
import Container from "./component/Container";
import "./App.css";
import Wellcomemsg from "./component/Wellcomemsg";
import { useState } from "react";
import { useContext } from "react";
import Contextapi from "./component/Contextapi";

function App() {
  let [Todolist, setTodolist] = useState([]);

  const handleaddonclick = (Todoname, Tododate) => {
    let newlist = { Name: Todoname, dueDate: Tododate };
    let newarr = [...Todolist, newlist];
    setTodolist(newarr);
  };

  const handleDeleteonclick = (todoname) => {
    let newtodolist = Todolist.filter((item) => item.Name !== todoname);
    setTodolist(newtodolist);
  };

  return (
    <Contextapi.Provider
      value={{ Todolist, handleaddonclick, handleDeleteonclick }}
    >
      <Container>
        <center className="Todo.container">
          <Appname></Appname>

          <TodoAdd></TodoAdd>

          <Wellcomemsg></Wellcomemsg>

          <Todoitems Todolist={Todolist}></Todoitems>
        </center>
      </Container>
    </Contextapi.Provider>
  );
}

export default App;
