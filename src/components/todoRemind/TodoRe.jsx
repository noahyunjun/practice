import InsertTodo from "./components/InsertTodo";
import ListItem from "./components/ListItem";
import useTodoStore from "../Store/useTodoStore";
import Button from "./components/Button";

const TodoRe = () => {
  const { todos, addTodo, delTodo, checkIsDone, clearTodoList } =
    useTodoStore();

  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h1>TodoList Remind</h1>
      <InsertTodo items={todos} addList={addTodo} />
      <ListItem items={todos} delList={delTodo} onClick={checkIsDone} />
      <Button name="Clear!" className={"mt-4"} onClick={clearTodoList} />
    </div>
  );
};

export default TodoRe;
