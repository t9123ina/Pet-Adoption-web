import React, { useEffect } from "react";
import { useStyles } from "../common/commonClass";
import { StyledCardAction, StyledCard } from "../common/customisedUI";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
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

import { API } from "../../apis";
const PetLists = props => {
  const { pets } = props;
  const classes = useStyles();
  const length = pets.length;
  useEffect(() => {}, [pets]);
  return (
    <Grid container>
      {pets.map(row => (
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <StyledCard key={row.id}>
            {length !== 0 ? (
              row.img_path ? (
                <CardActionArea>
                  <Avatar
                    className={classes.cardMedia}
                    src={`${API}${row.img_path}`}
                    alt={row.name}
                  />
                </CardActionArea>
              ) : (
                <Avatar className={classes.cardMedia}>
                  <PetsIcon />
                </Avatar>
              )
            ) : (
              <Avatar className={classes.cardMedia}>
                <PetsIcon />
              </Avatar>
            )}
            <CardHeader
              title={
                length !== 0 ? (
                  <>
                    <Typography className={classes.title}>
                      {row.name}
                    </Typography>
                    <Typography className={classes.title}>
                      {row.Animal}
                    </Typography>
                    <Typography className={classes.title}>
                      {row.gender}
                    </Typography>
                    <Typography className={classes.title}>
                      {row.age} Olds
                    </Typography>
                    <Typography className={classes.title}>
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
                  <Chip variant="outlined" size="small" label={row.followers} />
                </IconButton>
                <IconButton>
                  {!row.adopted ? <CheckBoxIcon /> : <CloseIcon />}
                </IconButton>
                <IconButton>
                  <ContactMailIcon />
                </IconButton>
              </Container>
            </StyledCardAction>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default PetLists;

PetLists.protoTypes = {
  pets: ProtoTypes.array.isRequired
};
