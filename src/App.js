import './App.css';
import AddTodo from "./components/AddTodo";
import VisibleFilters from "./components/VisibleFilters";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="todo-app">
            <h1>Hello"👋"add to note</h1>
            <AddTodo/>
            <TodoList/>
            <VisibleFilters/>
        </div>
    );
}

export default App;
