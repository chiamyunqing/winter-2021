import {useEffect, useState} from 'react';

export default function TodoList() { //capitalised so is return react component
    //setTodos is a function to update state of todos
    const [todos, setTodos] = useState([]); //react hooks

    const sampleTodos = [
        {title: "Buy groceries", isCompleted: false}, 
        {title: "Partayy", isCompleted: false},
        {title: "Thinking about life", isCompleted: false}
    ]
    const [newTodo, setNewTodo] = useState(null);

    const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos)); //become string
    }

    const getTodos = () => {
        const newTodos = JSON.parse(localStorage.getItem('todos'));
        if (newTodos && newTodos.length > 0) {
            setTodos(newTodos);
        } else {
            setTodos(sampleTodos);
        }
        
    }

    useEffect( () => { //run side effect after rendering
        if (todos.length === 0) {
            getTodos();
        }
        saveTodos();
    }, [todos]);

     const getTodosToRender = () => {
        //todos is a state variable - dependency, method is rerun
        return todos.map((todo, idx) => { //need to assign unique key to each
            return (
            <div className="columns todo mt-3 is-vcentered">
                <div className="column has-text-left">
                    <div key={idx} className={todo.isCompleted ? 'completed' : 'incomplete'}>
                        {todo.title}
                    </div>
                </div>
                <div className="column is-narrow"> 
                    <div className="buttons">
                        {!todo.isCompleted ?
                        <button className="button is-success" onClick={() => handleCompleteTask(idx)}>Complete</button> 
                        :  <button className="button is-info" onClick={() => handleUndoCompleteTask(idx)}>Undo</button> }
                        <button className="button is-danger" onClick={() => handleDeleteTask(idx)}>Delete</button>
                    </div>
                </div>
            </div>
            );
        })
    }

    const handleDeleteTask = (idx) => {
        const newTodos = [...todos]; 
        newTodos.splice(idx, 1);
        setTodos(newTodos);
    }

    const handleCompleteTask = (idx) => {
        const newTodos = [...todos];
        newTodos[idx].isCompleted = true;
        setTodos(newTodos); //set state
    }

    const handleUndoCompleteTask = (idx) => {
        const newTodos = [...todos];
        newTodos[idx].isCompleted = false;
        setTodos(newTodos);
    }

    const handleInputChanged = (event) => {
        setNewTodo(event.target.value);
    }

    const handleAddNewTodo = () => {
        const newTodoList = [...todos];
        newTodoList.push({title: newTodo, isCompleted:false});
        setTodos(newTodoList);
        saveTodos();
    }

    return (
        <div>
            <input className="input is-primary" 
            type="text" 
            placeholder="New Task"
            onChange={handleInputChanged}
            />
            <button className="button is-primary is-light mt-2 is-fullwidth" onClick={handleAddNewTodo}>Add Todo</button>
            <hr />
            <div className="todoList">
                {getTodosToRender()}
            </div>
        </div>   
    ); 
}