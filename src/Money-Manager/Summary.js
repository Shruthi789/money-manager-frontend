import {context} from './Home.js';
import * as React from 'react';
function Summary(){
    const {categoriesIncome}=React.useContext(context);
    return (<div><h1>Category Summary</h1>
    {categoriesIncome.map((category,index)=><p key={index}>{category}</p>)}
    </div>)
}

export {Summary};