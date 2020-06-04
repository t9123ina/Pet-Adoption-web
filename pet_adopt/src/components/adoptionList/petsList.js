import React, { useEffect, useState } from "react";
import { useStyles } from "../common/commonClass";
import {
  StyledCardAction,
  StyledCard,
  StyledCardHeader
} from "../common/customisedUI";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import PetsIcon from "@material-ui/icons/Pets";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CloseIcon from "@material-ui/icons/Close";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import ProtoTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import Avatar from "@material-ui/core/Avatar";
import ApplyForm from "./applyForm";
import { API } from "../../apis";
import Alert from "@material-ui/lab/Alert";
const PetLists = props => {
  const { pets, pet, getPet } = props;
  const [selectedPet, setSelectedPet] = useState(null);
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const length = pets.length;
  console.log(length);
  const handleSubmit = () => {
    setSelectedPet(null);
    setShow(false);
  };
  const handleClose = () => {
    setSelectedPet(null);
    setShow(false);
  };
  const handleApply = id => {
    getPet(id);
  };
  useEffect(() => {
    const length = Object.keys(pet).length;
    if (length !== 0) {
      setSelectedPet(pet);
      setShow(true);
    }
  }, [pets, pet]);
  return (
    <Grid container>
      <ApplyForm
        show={show}
        pet={selectedPet}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
      />
      {length !== 0 ? (
        pets.map(row => (
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <StyledCard key={row.id}>
              <StyledCardHeader
                avatar={
                  row.img_path ? (
                    <Avatar src={`${API}${row.img_path}`} alt={row.name} />
                  ) : (
                    <Avatar>
                      <PetsIcon />
                    </Avatar>
                  )
                }
                title={
                  length !== 0 ? (
                    <>
                      <Typography className={classes.list}>
                        <Chip className={classes.chipsLabel} label="Name" />
                        {row.name}
                      </Typography>
                      <Typography className={classes.list}>
                        <Chip className={classes.chipsLabel} label="Animal" />
                        {row.Animal}
                      </Typography>
                      <Typography className={classes.list}>
                        <Chip className={classes.chipsLabel} label="Gender" />
                        {row.gender}
                      </Typography>
                      <Typography className={classes.list}>
                        <Chip className={classes.chipsLabel} label="Age" />
                        {row.age} Olds
                      </Typography>
                      <Typography className={classes.list}>
                        <Chip className={classes.chipsLabel} label="Species" />
                        {row.species}
                      </Typography>
                    </>
                  ) : (
                    <Skeleton variant="text" />
                  )
                }
              />
              <StyledCardAction disableSpacing>
                <Container>
                  <IconButton>
                    <ThumbUpIcon color="primary" />
                    <Chip
                      variant="outlined"
                      size="small"
                      label={row.followers}
                    />
                  </IconButton>
                  <IconButton>
                    {!row.adopted ? <CheckBoxIcon /> : <CloseIcon />}
                  </IconButton>
                  <IconButton onClick={() => handleApply(row.id)}>
                    <ContactMailIcon />
                  </IconButton>
                </Container>
              </StyledCardAction>
            </StyledCard>
          </Grid>
        ))
      ) : (
        <Alert severity="warning">Cannot find the matching result</Alert>
      )}
    </Grid>
  );
};

export default PetLists;

PetLists.protoTypes = {
  pets: ProtoTypes.array.isRequired,
  pet: ProtoTypes.object.isRequired,
  getPet: ProtoTypes.func.isRequired
};
