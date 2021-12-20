import './App.css';
import 'bulma/css/bulma.min.css'; //loaded into app, keep it mimimal
import TodoList from './components/TodoList.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="columns is-centered">
          <div className = "column is-half">
            <h1 className="title has-text-white">My Todo List</h1>
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
