import { connect } from 'react-redux';
import Person from './component';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    person: state.people[id],
  };
};

export default connect(mapStateToProps)(Person);
