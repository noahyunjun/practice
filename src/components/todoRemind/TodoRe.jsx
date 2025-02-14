import InsertTodo from "./components/InsertTodo";
import ListItem from "./components/ListItem";
import useTodoStore from "../Store/useTodoStore";

const TodoRe = () => {
  const { todos, addTodo, delTodo, checkIsDone } = useTodoStore();

  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h1>TodoList Remind</h1>
      <InsertTodo items={todos} addList={addTodo} />
      <ListItem items={todos} delList={delTodo} onClick={checkIsDone} />
    </div>
  );
};

export default TodoRe;
