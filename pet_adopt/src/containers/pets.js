import { connect } from "react-redux";
import Adoption from "../views/adoption";
import * as actions from "../actions";

const mapStateToProps = state => {
  const pets = state.app.pets;

  return {
    pets
  };
};

const mapDispatchToProps = dispatch => ({
  getPets: form => dispatch(actions.getPetsList(form))
});

const AdoptionPage = connect(mapStateToProps, mapDispatchToProps)(Adoption);

export default AdoptionPage;
