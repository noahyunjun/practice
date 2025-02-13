import InsertTodo from "./components/InsertTodo";
import ListItem from "./components/ListItem";
import useTodoStore from "./useTodoStore";

const TodoRe = () => {
  const { todos, addTodo, delTodo } = useTodoStore();

  const toggleIsDone = (id) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h1>TodoList Remind</h1>
      <InsertTodo items={todos} addList={addTodo} />
      <ListItem items={todos} delList={delTodo} onClick={toggleIsDone} />
    </div>
  );
};

export default TodoRe;
