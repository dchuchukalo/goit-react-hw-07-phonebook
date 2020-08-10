import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  items: contactsSelectors.getItems(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: newContact => dispatch(contactsOperations.addContact(newContact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
