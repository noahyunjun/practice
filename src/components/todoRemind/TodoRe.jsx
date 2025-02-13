import { useEffect, useState } from "react";
import InsertTodo from "./components/InsertTodo";
import ListItem from "./components/ListItem";
import useStore from "./useTodoStore";

const TodoRe = () => {
  const [todoItems, setTodoItems] = useState(() => {
    const saveItems = localStorage.getItem("todolist");
    return saveItems ? JSON.parse(saveItems) : [];
  });

  const addTodoList = (text) => {
    const arr = [...todoItems];
    arr.push({
      id: todoItems.length === 0 ? 1 : todoItems[todoItems.length - 1].id + 1,
      text: text,
      isDone: false,
    });
    setTodoItems(arr);
  };

  const deleteTodoList = (id) => {
    const arr = [...todoItems];
    arr.splice(id, 1);
    setTodoItems(arr);
  };

  const toggleIsDone = (id) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };
  useEffect(() => {
    window.localStorage.setItem("todolist", JSON.stringify(todoItems));
  }, [todoItems]);

  const { count, incrementCount, removeCount } = useStore();

  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h1>TodoList Remind</h1>
      <InsertTodo items={todoItems} addList={addTodoList} />
      <ListItem
        items={todoItems}
        delList={deleteTodoList}
        onClick={toggleIsDone}
      />
      <div> Count : {count}</div>
      <div>
        <button onClick={() => incrementCount()}>Up!</button>
        <button onClick={() => removeCount()}>reset!</button>
      </div>
    </div>
  );
};

export default TodoRe;
