import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';


const AdvanceSearchPopup = ({ togglePopup }) => {
  return (
    <div className="popup-box">
      <div style={{ height: "40vh", width: "58%" }} className="box">
        <h1>ADVANCED SEARCH</h1>
        <Grid 
    container
    rowSpacing={4}
    columnSpacing={{xs:1, sm:2, md:3}}
    style={{width: "1000px"}}
>
    <Grid item xs={6}>
    <div>
    <TextField
            id="doc_id"
            label="Document-Id"
            variant="outlined"
            fullWidth
            className="customer" />
    </div>
    </Grid>
    <Grid item xs={6}>
    <div>
    <TextField
            id="customer_no"
            label="Customer Number"
            variant="outlined"
            fullWidth
            className="customer" />
    </div>
    </Grid>
    <Grid item xs={6}>
    <div>
    <TextField
            id="Invoice_no"
            label="Invoice Number"
            variant="outlined"
            fullWidth
            className="customer" />
    </div>
    </Grid>
    <Grid item xs={6}>
    <div>
    <TextField
            id="business_year"
            label="Business Year"
            variant="outlined"
            fullWidth
            className="customer" />
    </div>
    </Grid>


    <Grid item xs={6}>
    <div>          
          <Button variant="outlined" aria-label="outlined button group" type="submit" fullWidth>SEARCH</Button>
    </div>
    </Grid>
    <Grid item xs={6}>
    <div> 
          <Button variant="outlined" aria-label="outlined button group" onClick={togglePopup} fullWidth>CANCEL</Button>
    </div>

      
    </Grid>
  </Grid>
</div>
    </div>
  );
};

export default AdvanceSearchPopup;
