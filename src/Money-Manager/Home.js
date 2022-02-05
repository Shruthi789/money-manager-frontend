import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import BasicTabs from './Tabs';
import {API} from './APIInfo.js'

const context=React.createContext({});
function Home(){
    return(<div><h1>Welcome to the Money Manager!!</h1>
        <br/>
       <FormDialog />
    </div>);
}
function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [categoriesIncome,setCategoriesIncome]=React.useState([]);
    //const [categoriesExpense,setCategoriesExpense]=React.useState([]);
    const getCategories=()=>{
      fetch(`${API}/income/category`)
      .then((res)=>res.json())
      .then((data)=>setCategoriesIncome(data))
      .catch((error)=>console.log(error));
    //   fetch(`${API}/expenditure/category`)
    //   .then((res)=>res.json())
    //   .then((data)=>setCategoriesExpense(data))
    //   .catch((error)=>console.log(error));
    };
    React.useEffect(getCategories,[]);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const initialValues= {
        amount:'',
        dateandtime:new Date(),
        description:'',
        category:'',
        division:''
      };
      const submitHandler=(values)=>{
                            const addedData={
                                               name:values.amount,
                                               poster:values.dateandtime,
                                               summary:values.description,
                                               rating:values.category,
                                               cast:values.division,
                                             };
                                   fetch(`${API}/income/`,{
                                     method:'POST',
                                     headers:{
                                       'content-type':'application/json'
                                     },
                                     body:JSON.stringify(addedData)
                                   })
                                    .then(()=>{
                                        console.log('Added!');
                                      })
                                      .catch((error)=>console.log(error));
                                    };
    const obj={categoriesIncome,submitHandler,initialValues};
    return (
    <context.Provider value={obj}>
      <div>
        <Button variant="contained" startIcon={<AddIcon/>} color="success" onClick={handleClickOpen}>
          ADD INCOME/EXPENSE
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>ADD INCOME OR EXPENSE</DialogTitle>
          <DialogContent>
            <BasicTabs/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
      </context.Provider>
    );
  }

export {Home,context};