import { useState } from "react";
import InsertTodo from "./components/InsertTodo";
import ListItem from "./components/ListItem";

const TodoRe = () => {
  const [todoItems, setTodoItems] = useState([
    { id: 1, text: "투두리스트 맹글기", isDone: true },
    { id: 2, text: "독서하기", isDone: false },
    { id: 3, text: "공부와 취직에 대한 정신적 명상 하기", isDone: false },
  ]);

  const addTodoList = (text) => {
    const arr = [...todoItems];
    arr.push({
      id: arr.length + 1,
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

  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h1>TodoList Remind</h1>
      <InsertTodo items={todoItems} addList={addTodoList} />
      <ListItem items={todoItems} delList={deleteTodoList} />
    </div>
  );
};

export default TodoRe;
