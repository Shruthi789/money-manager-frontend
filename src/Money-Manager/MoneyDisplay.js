import {useParams} from 'react-router-dom';
function MoneyDisplay(){
    const {option}=useParams();
    return(<h1>Money Display Component({option})</h1>)
}
export {MoneyDisplay};