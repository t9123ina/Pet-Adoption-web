import React, { useEffect, useState } from "react";
import { useStyles } from "../common/commonClass";
import { StyledCard } from "../common/customisedUI";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

import ProtoTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";

const ContactList = props => {
  const { contacts } = props;
  const classes = useStyles();

  useEffect(() => {}, [contacts]);
  return (
    <Grid container>
      {contacts.map(row => (
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <StyledCard key={row.id}>
            <CardHeader
              avatar={<Avatar style={{ backgroundColor:'#dc004e' }} aria-label="recipe"></Avatar>}
              title={
                <div>
                  <Typography>
                    {row.firstName} {row.lastName}
                  </Typography>
                  <Typography>{row.email}</Typography>
                  <Typography>{row.position}</Typography>
                  <Typography>{row.phone}</Typography>
                </div>
              }
            />
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ContactList;

ContactList.protoTypes = {
  contacts: ProtoTypes.array.isRequired
};
