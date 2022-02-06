import {useParams} from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import {API} from './APIInfo.js'
import {useEffect, useState} from 'react';
function MoneyDisplay(){
    const {option}=useParams();
    return(<h1>Money Display Component({option})
           <DataGridDemo option={option}/>
        </h1>)
}

const columns = [
  { field: '_id', headerName: 'Month/Week/Year', width: 90, editable:true },
  { field: 'totalIncome', headerName: 'Total Income', width: 90,editable:true }
];


 function DataGridDemo({option}) {
    const [rows, setRows]=useState([]);
    localStorage.setItem('option',option);
    const getRows=()=>{
        const opt=localStorage.getItem('option');
        fetch(`${API}/income/${opt}`)
        .then((res)=>res.json())
        .then((data)=>setRows(data))
        .catch((error)=>console.log(error));
     };
    useEffect(getRows,[]);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
export {MoneyDisplay};