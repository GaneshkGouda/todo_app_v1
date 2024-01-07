import "./App.css";
import Applogo from "./copm/applogo";
import Inputbox from "./copm/appinput";
import Todoitems from "./todoitems";
import { useState, useEffect } from "react";
// import localStorage from "local-storage";
import { Message } from "./copm/msg";
import { Checklist } from "./copm/checklist";
// import { IconName } from "react-icons ";

function App() {
  const getLocalStorage = () => {
    const todos = localStorage.getItem("todo");
    if (todos) {
      return JSON.parse(localStorage.getItem("todo"));
    }
  };
  const [todoitems, settodoitems] = useState(getLocalStorage());
  const handelNewItem = (todo) => {
    if (todo == "") {
      alert("Enter the task");
    } else {
      let newtodo = [...todoitems, todo];
      settodoitems(newtodo);
      // localStorage.setItem("todo", newtodo);
    }
  };
  // todoitems = (...Todoitems)
  const handleDeleteClicked = (todo) => {
    const newtodos = todoitems.filter((item) => item !== todo);
    settodoitems(newtodos);
  };
  // set localStorage
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoitems));
  }, [todoitems]);

  return (
    <center>
      <div className="main">
        <Applogo></Applogo>
        <Inputbox onNewtodo={handelNewItem}></Inputbox>
        {todoitems.length === 0 ? <Message /> : <Checklist />}

        <Todoitems
          ondelete={handleDeleteClicked}
          todoitems={todoitems}
        ></Todoitems>
      </div>
    </center>
  );
}
export default App;
