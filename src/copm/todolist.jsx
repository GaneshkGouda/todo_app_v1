import { MdDoneOutline } from "react-icons/md";
function Todo({ todoName, ondelete }) {
  // let todoName = "";
  // let todoDate = "";

  return (
    <div className="  cen ">
      <div className=" box2 ">{todoName}</div>

      <div className=" bbox ">
        <button
          type="button "
          onClick={() => ondelete(todoName)}
          className="btn1  "
        >
          <MdDoneOutline />
        </button>
      </div>
    </div>
  );
}

export default Todo;
