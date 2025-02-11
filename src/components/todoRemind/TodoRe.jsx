import InsertTodo from "./components/InsertTodo";
import ListItem from "./components/ListItem";

const todoItems = [
  { id: 1, text: "투두리스트 맹글기", isDone: true },
  { id: 2, text: "독서하기", isDone: false },
  { id: 3, text: "공부와 취직에 대한 정신적 명상 하기", isDone: false },
];

const TodoRe = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h1>TodoList Remind</h1>
      <InsertTodo />
      <ListItem items={todoItems} />
    </div>
  );
};

export default TodoRe;
