import {useFormik} from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import MenuItem from '@mui/material/MenuItem';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';

/*Add Income or Expense */

function FormComponent({initialValues,submitHandler,label,categoriesIncome}){
    
    const formValidationSchema=yup.object({
        amount:yup.number().required('Enter an amount!!'),
        dateandtime:yup.date().required('Enter a date and time!!'),
        description:yup.string().min(25).required('Enter a description!!'),
        category:yup.string().required('Enter a category!'),
        division:yup.string().required('Enter a division!')
      });
      const {values,errors,touched,handleSubmit,handleBlur,handleChange}=useFormik({
        initialValues: initialValues,
        validationSchema:formValidationSchema,
        onSubmit:submitHandler
      })
    return (<div>
        <div className='adjust-form'>
        <form onSubmit={handleSubmit} className="form-style">
        <div className="form-style">
        <label className="label-style">Amount:</label>
     <TextField
      id="amount"
      name="amount"
      label="Amount"
      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors.amount && touched.amount}
      helperText={touched.amount?errors.amount:""}
      sx={{width:{xs:'90vw',md:331}}}
    />
    </div>
        <div className="form-style">
        <label className="label-style">Date and Time: </label>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        id="dateandtime"
        name="dateandtime"
        label="Date and Time"
        value={values.dateandtime}
        onChange={(newValue) => {
          console.log(newValue);
          values.dateandtime=newValue;
          console.log(values.dateandtime);
        }}
      />
    </LocalizationProvider>
    </div>
    <div className="form-style">
        <label className="label-style">Description: </label>
    <TextareaAutosize
  aria-label="description"
  minRows={3}
  id="description"
  name="description"
  label="description"
  value={values.description}
  onChange={handleChange}
  onBlur={handleBlur}
  error={errors.description && touched.description}
  sx={{width:{xs:'90vw',md:331}}}
/>
    </div>
    <div className="form-style">
     <label className="label-style"> Category: </label>
    <TextField
    select
    id="category"
    name="category"
    label="Category"
    value={values.category}
    onChange={handleChange}
    onBlur={handleBlur}
    error={errors.category && touched.category}
    helperText={touched.category?errors.category:""}
   sx={{width:{xs:'90vw',md:331}}}
  >
     {categoriesIncome.map((lang,index)=><MenuItem key={index} value={lang}>{lang}</MenuItem>)}
  </TextField>
    </div>
    <div className="form-style">
     <label className="label-style"> Division: </label>
     <TextField
    select
    id="division"
    name="division"
    label="Division"
    value={values.division}
    onChange={handleChange}
    onBlur={handleBlur}
    error={errors.divison && touched.division}
    helperText={touched.division?errors.division:""}
   sx={{width:{xs:'90vw',md:331}}}
  >
    {["Office","Personal"].map((lang,index)=><MenuItem key={index} value={lang}>{lang}</MenuItem>)}
  </TextField>
    </div>
       <Button variant="contained" type="Submit">+ADD {label}</Button>

</form>
</div> 
</div>);
}
 export {FormComponent}