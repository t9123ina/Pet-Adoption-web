import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { useStyles } from "../components/common/commonClass";

import Information from "../components/introduction/information";
import ProtoTypes from "prop-types";
const Introduction = props => {
  const classes = useStyles();
  const { features, getFeatures } = props;
  const [init, setInit] = useState(true);
  useEffect(() => {
    const fetchFeatures = () => {
      getFeatures();
    };
    if (init) {
      setInit(false);
      fetchFeatures();
    }
  }, [features, getFeatures, init]);
  return (
    <Container className={classes.container}>
      <Information features={features} />
    </Container>
  );
};

export default Introduction;

Introduction.protoTypes = {
  features: ProtoTypes.array.isRequired,
  getFeatures: ProtoTypes.func.isRequired
};
