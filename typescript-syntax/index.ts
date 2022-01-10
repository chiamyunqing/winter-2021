import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    const todo = res.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;
    logTodo(id, title, finished);
});

const logTodo = (id: number, title: string, finished: boolean) => {
    console.log(`
    Todo ID: ${id}
    Has title of: ${title}
    Is it finished ? ${finished}
    `);
}
