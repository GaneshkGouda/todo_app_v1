import css from "./applogo.module.css";
import { LuListTodo } from "react-icons/lu";
import { FcTodoList } from "react-icons/fc";
import { SiTodoist } from "react-icons/si";
function Applogo() {
  return (
    <h1 className={css.he1}>
      Todo app -
      <FcTodoList />
    </h1>
  );
}
export default Applogo;
