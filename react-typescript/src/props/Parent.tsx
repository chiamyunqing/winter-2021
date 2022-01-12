import {ChildAsFC} from './Child';

const Parent = () => {
    return <ChildAsFC color="blue" onClick={()=>console.log('click')}>
        abced
        </ChildAsFC>;
};

export default Parent;
