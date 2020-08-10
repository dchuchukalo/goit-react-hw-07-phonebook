import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: contactsSelectors.filteredItems(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: contactId =>
    dispatch(contactsOperations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
