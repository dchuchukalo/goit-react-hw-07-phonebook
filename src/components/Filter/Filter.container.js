import { connect } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import Filter from './Filter';

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.currentTarget.value)),
  resetFilter: () => dispatch(contactsActions.resetFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
