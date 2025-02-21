import InsertTodo from "./components/InsertTodo";
import ListItem from "./components/ListItem";
import useTodoStore from "../Store/useTodoStore";
import Button from "./components/Button";
import NavigationButton from "../../NavigationButton";

const TodoRe = () => {
  const { todos, addTodo, delTodo, checkIsDone, clearTodoList } =
    useTodoStore();

  return (
    <div className="h-screen mx-auto px-4 flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-7">TodoList Remind</h1>
      <InsertTodo items={todos} addList={addTodo} />
      <ListItem items={todos} delList={delTodo} onClick={checkIsDone} />
      <Button name="Clear!" className="mt-4" onClick={clearTodoList} />
      <NavigationButton key="/" path="/" label="Home" />
    </div>
  );
};

export default TodoRe;
