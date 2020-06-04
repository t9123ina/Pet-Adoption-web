import { connect } from "react-redux";
import Contact from "../views/contact";
import * as actions from "../actions";

const mapStateToProps = state => {
  const contacts = state.app.contacts;

  return {
    contacts
  };
};

const mapDispatchToProps = dispatch => ({
  getContacts: form => dispatch(actions.getContactsList())
});

const ContactPage = connect(mapStateToProps, mapDispatchToProps)(Contact);

export default ContactPage;
