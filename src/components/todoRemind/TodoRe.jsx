import InsertTodo from "./components/InsertTodo";
import ListItem from "./components/ListItem";

const TodoRe = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>TodoList Remind</h1>
      <InsertTodo />
      <ListItem />
    </div>
  );
};

export default TodoRe;
