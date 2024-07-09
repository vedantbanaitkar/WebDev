import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      settodos(todos)
    }
  }, [])
  

  const saveToLs = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i=>i.id === id)
    settodo(t[0].todo);
     let newTodos = todos.filter( item =>{
      return item.id!==id
    });
    settodos(newTodos);
    saveToLs();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter( item =>{
      return item.id!==id
    });
    settodos(newTodos);
    saveToLs()
    
  };
  const handleAdd = () => {
    settodos([...todos, {id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
    saveToLs();
  };

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item =>{
      return item.id == id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos)
    saveToLs();
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-50 min-h-[80vh] md:w-1/2">
        <h1 className="font-bold text-center text-xl">
          ITask - Manage your todos at one place
        </h1>
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <div className="flex justify-between my-9">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className="w-3/4"
            />
            <button
              onClick={handleAdd}
              className=" w-40 bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-6 text-sm font-bold"
            >
              Add
            </button>
          </div>
        </div>
        <h2 className="text-lg font-semibold">Your Todo</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-5">No Todos to display</div>}
          {todos.map((item) => {
            return (
              <div
                key={item.id}
                className="todo flex w-3/4 my-3 justify-between"
              >
                <div className="flex gap-7">
                  <input
                    name={item.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    value={item.isCompleted}
                  />
                  <div className={item.isCompleted ? "line-through" : ""}>
                    {item.todo}
                  </div>
                </div>
                <div className="buttons flex h-full">
                  <button
                    onClick={(e) => {
                      handleEdit(e, item.id);
                    }}
                    className="bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-2 text-sm font-bold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                    className="bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-2 text-sm font-bold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
