import { connect } from 'react-redux';
import values from 'lodash/values';
import People from './component';

const mapStateToProps = (state) => {
  const peopleArray = values(state.people);

  return {
    people: peopleArray,
  };
};

export default connect(mapStateToProps)(People);
