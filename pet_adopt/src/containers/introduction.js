import { connect } from "react-redux";
import Introduction from "../views/introduction";
import * as actions from "../actions";

const mapStateToProps = state => {
  const features = state.app.features;

  return {
    features
  };
};

const mapDispatchToProps = dispatch => ({
  getFeatures: form => dispatch(actions.getFeaturesList(form))
});

const IntroductionPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Introduction);

export default IntroductionPage;
