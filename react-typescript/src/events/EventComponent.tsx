const EventComponent: React.FC = () => {

    //type inference system not applied here 
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }

    const onDragStart = (event : React.DragEvent<HTMLDivElement>) => {
        console.log(event);
    }
    
    return <div>
        <input onChange={onChange} />
        <div draggable onDragStart={onDragStart}> 
        Drag me!
        </div>
    </div>
}

export default EventComponent;
