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
  const { pet, show, handleClose, handleSubmit } = props;
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
            <TextField label="applicant name" />
          </div>

          <div className="mb-2">
            <TextField type="email" label="email" />
            <TextField type="phone" label="Phone" />
          </div>
          <div className="mb-2">
            {" "}
            <FormControl component="fieldset">
              <FormLabel component="legend">
                What species you are interested in ?{" "}
              </FormLabel>
              <RadioGroup row aria-label="animal" name="animal">
                <FormControlLabel value="all" control={<Radio />} label="All" />
                <FormControlLabel
                  value="dog"
                  control={<Radio />}
                  label="Dogs"
                />
                <FormControlLabel
                  value="cat"
                  control={<Radio />}
                  label="Cats"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="mb-2">
            <TextField
              type="number"
              label="Number of pet you adopted?"
              fullWidth
            />
          </div>
          <div className="mb-2">
            <TextField label="Adoption Reason" multiline fullWidth rows={5} />
          </div>
          <div className="mb-2">
            <TextField
              label="Adoption Experience"
              multiline
              fullWidth
              rows={5}
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
