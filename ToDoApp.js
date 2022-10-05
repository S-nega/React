import "./App.css";
import {useState, useMemo}from "react";
import {v4 as uuid} from "uuid";

// button-group
const buttons = [
  {
    type: "all",
    label: "All",
  },
  {
    type: "active",
    label: "Active",
  },
  {
    type: "done",
    label: "Done",
  },
];

const itemsData = [
  {
    key: uuid(),
    label: "Have fun",
  },
  {
    key: uuid(),
    label: "Spread Empathy",
  },
  {
    key: uuid(),
    label: "Generate Value",
  },
];

function App() {
  const [todoItemText, setTodoItemText] = useState("");
  const [items, setItems] = useState(itemsData);
  const [status, setStatus] = useState("all");
  const [todoSearchItemText, setSearchItemText] = useState("");
  // const [itemsSaveList, setItemsSaveList] = useState(items);

  const handleInputChange = (event) => {
    setTodoItemText(event.target.value);
  }

  const searchItems = useMemo(()=> 
    items.filter((str) =>
      str.label.toLowerCase().includes(todoSearchItemText.toLowerCase())
    ),
    [items, todoSearchItemText]
  )

  const handleAddItem = () => {
    const newObject = {key: uuid(), label: todoItemText};
    
    const newItems = [...items,newObject];
    setItems(newItems);
    setTodoItemText("");
  }

  const handleItemDone = (key) => {
    setItems(
      (prevItems)=>
      prevItems.map((item)=>{
        if(item.key===key){
          return{ ...item, isDone: !item.isDone};
        }else return item;
      }));
  }

  const handleStatusChange = (myNewStatus) =>{
    setStatus(myNewStatus);
  }

  const handleImportant = (key) =>{
    setItems(
      (prevItems)=>
      prevItems.map((item)=>{
        if(item.key === key){
          return{...item, isImportant: !item.isImportant};
        }else return item;
      }));
  }

  const handleDeleteItem = (key) =>{
      setItems(
        items.filter((item) => {
          // handleDeleteItemSave(item.key);
          return item.key !== key
        })   
      );
  }

  const itemsDone = items.filter((item) => item.isDone);
  const itemsNotDone = items.filter((item) => !item.isDone);

  const filteredItems =
     status === "done" ? itemsDone : status === "active" ? itemsNotDone : searchItems ;
  
  return (
    <div className="todo-app">
      {/* App-header */}
      <div className="app-header d-flex">
        <h1>Todo List</h1>
        <h2>
          {itemsNotDone.length} more to do, {itemsDone.length} done
        </h2>
      </div>

      <div className="top-panel d-flex">
        {/* Search-panel */}
        <input
          value={todoSearchItemText}
          type="text"
          className="form-control search-input"
          placeholder="type to search"
          onChange={(event) => setSearchItemText(event.target.value)}
        />
        {/* Item-status-filter */}
        <div className="btn-group">
          
          {buttons.map((itemB) => (
            <button 
              key={itemB.type} 
              type="button" 
              className={`btn btn${itemB.type===status? "" : "-outline"}-info`} 
              onClick={()=>handleStatusChange(itemB.type)}>
                {itemB.label}
            </button>
          ))}

        
        </div>
      </div>

      {/* List-group */}
      <ul className="list-group todo-list">
        {filteredItems.map((itemList) => (
          <li key={itemList.key} className={`list-group-item`} >      
           <span className={`todo-list-item ${itemList.isDone?"done" : ""} ${itemList.isImportant?"important" : ""}`}>
            <span className="todo-list-item-label" onClick={()=>handleItemDone(itemList.key)}>
                {itemList.label}
            </span>
            <button
              type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={()=>handleImportant(itemList.key)}
            >
              <i className="fa fa-exclamation" />
            </button>

            <button
              type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={()=>handleDeleteItem(itemList.key)}
            >
              <i className="fa fa-trash-o" />
            </button>
          </span>
        </li>
        ))}

      
      </ul>

      <div className="item-add-form d-flex">
        <input
          value={todoItemText}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="What needs to be done"
        />
        <button className="btn btn-outline-secondary" onClick={handleAddItem}>Add item</button>
      </div>
    </div>
  );
}

export default App;
