import React from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "30ch"
    }
  }
}));

export default function SearchEveryWhere() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedB: true,    
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    
  };

  return (
    <form className={classes.root}>
      <div>
        <TextField
          id="outlined-helperText"
          label="To"
          defaultValue="EveryWhere"
          variant="outlined"
        />
        <TextField
          id="outlined-helperText"
          label="From"
          defaultValue="Tucson International (TUS)"
          variant="outlined"
        />

        <TextField
          id="outlined-helperText"
          label="Depart"
          defaultValue="Cheapest Month"
          variant="outlined"
        />

        <TextField
          id="outlined-helperText"
          label="Return"
          defaultValue="Cheapest Month"
          variant="outlined"
        />
      </div>

      <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Non-stop flights only"
      />  
        
    </div>
    </form>
  );
}
