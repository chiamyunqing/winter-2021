//expected props received by child
interface ChildProps {
    color: string;
    onClick: () => void; 
}

//React component, param destructure ChildProps
//this method sucks, must put children explicitly as ChildProps
export const Child = ({color, onClick}: ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click me</button>
        </div>
};

//defining functional components
//ChildAsFC is a React function component and it will receive props of type 'ChildProps'
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children}) => {
    return <div>
        {color}
        {children}
        <button onClick={onClick}>Click me</button></div>
}

