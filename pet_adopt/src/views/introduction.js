import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Information from "../components/introduction/information";
import ProtoTypes from "prop-types";
const Introduction = props => {
  const { features, getFeatures } = props;
  const [init, setInit] = useState(true);
  console.log(features);

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
    <Container>
      <Information features={features} />
    </Container>
  );
};

export default Introduction;

Introduction.protoTypes = {
  features: ProtoTypes.array.isRequired,
  getFeatures: ProtoTypes.func.isRequired
};
