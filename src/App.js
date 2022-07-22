
import "./App.css";
import Header from "./components/Header";
import { ToDo } from "./components/ToDo";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { AddToDo } from "./components/AddToDo";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { About } from "./components/About";
function App() {
  const addItem =(title,desc)=>{
    const item={
      title:title,
      description:desc
    }
    settodos([...todos,item]);
  }
  const DeleteOne = (todo)=>{
    console.log(todo);
      settodos(todos.filter((e)=>{
        return (e!==todo)})
      )
  }
  const  [todos,settodos] = useState( []);
  return (
    <Router>
    <div className="App ">
      <Header title="MyToDoList" />
      <Routes>
      <Route exact path="/" element={<><AddToDo addItem={addItem}/> <ToDo todos={todos} deleteOne={DeleteOne}/></> }/>
     
      <Route exact path="/about" element={ <About/>}/>
  
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
