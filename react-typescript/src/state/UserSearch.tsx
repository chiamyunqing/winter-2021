import {useState} from 'react';

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 20},
    {name: 'Michael', age: 20}
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();

    //searching logic
    const onClick = () => {
        //function called with each obj in array running
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    }

    return <div>
        User Search
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
            {user && user.name}
            <br/>
            {user && user.age}
        </div>
        </div>
};

export default UserSearch;