import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import TextField from "@material-ui/core/TextField";
import ProtoTypes from "prop-types";
import { API } from "../../apis";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { useStyles } from "../common/commonClass";
import { Typography } from "@material-ui/core";
const ApplyForm = props => {
  const { pet, show, handleClose, handleSubmit, applyForm, handleChange } = props;
  const classes = useStyles();
  useEffect(() => {
    console.log(pet);
  }, [show, pet]);
  return (
    <Dialog
      open={show}
      onClose={handleClose}
      aria-labelledby="apply-form-title"
      aria-describedby="apply-form"
    >
      <DialogTitle id="apply-form-title">
        {pet ? `Apply Pet Adoption -- ${pet.name}` : "Apply Pet Adoption"}
      </DialogTitle>
      <DialogContent>
        {pet ? (
          <Typography>
            <Typography>
              <img src={`${API}${pet.img_path}`} className={classes.img} />
            </Typography>
            <Typography>Age: {pet.age}</Typography>
            <Typography>Gender: {pet.gender}</Typography>
            <Typography>Species: {pet.species}</Typography>
          </Typography>
        ) : null}
        <form id="apply-form" className={classes.searchForm}>
          <div className="mb-2">
            <TextField 
            label="applyname"
            name="applyname"
            onChange={handleChange} 
            value={applyForm.applyname}/>
          </div>

          <div className="mb-2">
            <TextField 
            type="email" 
            label="email"
            name="email"
            onChange={handleChange} 
            value={applyForm.email}/>
            <TextField 
            type="phone" 
            label="Phone"
            name="phone"
            onChange={handleChange} 
            value={applyForm.phone}/>
          </div>
          <div className="mb-2">
            {" "}
            <FormControl component="fieldset" onChange={handleChange}>
              <FormLabel component="legend">
                What species you are interested in ?{" "}
              </FormLabel>
              <RadioGroup row aria-label="animal" name="animal">
                <FormControlLabel value="all" control={<Radio checked={applyForm.animal === "all"} />} label="All" />
                <FormControlLabel
                  value="dog"
                  control={<Radio checked={applyForm.animal === "dog"}/>}
                  label="Dogs"
                />
                <FormControlLabel
                  value="cat"
                  control={<Radio checked={applyForm.animal === "cat"}/>}
                  label="Cats"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="mb-2">
            <TextField
              type="number"
              label="Number of pet you adopted?"
              name="adoptednum"
              onChange={handleChange} 
              value={applyForm.adoptednum}
              fullWidth
            />
          </div>
          <div className="mb-2">
            <TextField 
            label="Adoption Reason" 
            multiline 
            fullWidth 
            rows={5}
            name="reason"
            onChange={handleChange} 
            value={applyForm.reason}/>
          </div>
          <div className="mb-2">
            <TextField
              label="Adoption Experience"
              multiline
              fullWidth
              rows={5}
              name="experience"
              onChange={handleChange} 
              value={applyForm.experience}
            />
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={handleSubmit} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApplyForm;

ApplyForm.protoTypes = {
  pet: ProtoTypes.object.isRequired,
  show: ProtoTypes.bool.isRequired,
  handleSubmit: ProtoTypes.func.isRequired,
  handleClose: ProtoTypes.func.isRequired
};
