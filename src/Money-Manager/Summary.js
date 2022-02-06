import {homeContext} from './Home.js';
import * as React from 'react';
function Summary(){
    const context=React.useContext(homeContext);
    console.log(context);
    return (<div><h1>Category Summary</h1>
    {context.categoriesIncome.map((category,index)=><p key={index}>{category}</p>)}
    </div>)
}

export {Summary};