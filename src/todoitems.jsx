import Todo from "./copm/todolist";

const Todoitems = ({ todoitems, ondelete }) => {
  return todoitems.map((item) => (
    <Todo
      key={item}
      todoName={item}
      ondelete={ondelete}
      // todoDate={item.date}
    ></Todo>
  ));
};
export default Todoitems;
