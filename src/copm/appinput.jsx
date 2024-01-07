import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
function Inputbox({ onNewtodo }) {
  const [toname, setTodoname] = useState("");
  // const [todate, setTododate] = useState("");
  const handelOnchange = (e) => {
    let name = e.target.value;
    setTodoname(name);
  };
  // const handelOnchanged = (e) => {
  //   let date = e.target.value;
  //   setTododate(date);
  // };
  const hadelonclick = (event) => {
    event.preventDefault();
    onNewtodo(toname);
    // console.log(event);

    setTodoname("");
  };
  return (
    <form onSubmit={hadelonclick} className=" cen1">
      <div className=" box ">
        <input
          type="text"
          placeholder="enter the todo here"
          onChange={handelOnchange}
          value={toname}
        />
      </div>

      <div className="bbox">
        <button className="btn1">
          <IoMdAdd />
        </button>
      </div>
    </form>
  );
}
export default Inputbox;
