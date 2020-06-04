import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { useStyles } from "../components/common/commonClass";

import ContactList from "../components/contacts/contact";
import ProtoTypes from "prop-types";
const Contact = props => {
  const classes = useStyles();

  const { contacts, getContacts } = props;
  const [init, setInit] = useState(true);

  useEffect(() => {
    const fetchContacts = () => {
      getContacts();
    };
    if (init) {
      setInit(false);
      fetchContacts();
    }
  }, [contacts, getContacts, init]);
  return (
    <Container className={classes.container}>
      <ContactList contacts={contacts} />
    </Container>
  );
};

export default Contact;

Contact.protoTypes = {
  contacts: ProtoTypes.array.isRequired,
  getContacts: ProtoTypes.func.isRequired
};
