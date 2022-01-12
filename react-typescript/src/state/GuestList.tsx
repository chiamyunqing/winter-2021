import {useState} from 'react';

//no need angular brackets if no props expected
const GuestList: React.FC = () => {
    //typescript can determine name is type string 
    const [name, setName] = useState('');
    //guests state will be array of string
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setName('');
        setGuests([...guests, name]);
    }

    return <div>
        <h3>Guest list</h3>
        <ul>
            {guests.map(guest => <li key={guest}>{guest}</li>)}
        </ul>
        <input value={name} onChange= {(e)=> setName(e.target.value)}/>
        <button onClick={onClick}>Add Guest</button>
        </div>
}; 

export default GuestList;