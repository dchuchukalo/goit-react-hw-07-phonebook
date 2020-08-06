import React from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';

const ContactList = ({ items, filter, deleteContact }) => {
  const normalizedFilter = filter.toLowerCase();
  const filteredItems = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <ul>
      {filteredItems &&
        filteredItems.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDelete={() => deleteContact(id)}
          />
        ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  deleteContact: contactId =>
    dispatch(contactsOperations.deleteContact(contactId)),
});

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
