import { connect } from "react-redux";
import Adoption from "../views/adoption";
import * as actions from "../actions";

const mapStateToProps = state => {
  const pets = state.app.pets;
  const animals = state.app.animals;
  const pet = state.app.pet;

  return {
    pets,
    animals,
    pet
  };
};

const mapDispatchToProps = dispatch => ({
  getPets: (query = null) => dispatch(actions.getPetsList(query)),
  getAnimals: () => dispatch(actions.getAnimalsList()),

  getPet: id => dispatch(actions.getPet(id))
});

const AdoptionPage = connect(mapStateToProps, mapDispatchToProps)(Adoption);

export default AdoptionPage;
