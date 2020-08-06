import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { ToastContainer, Zoom } from 'react-toastify';
import { connect } from 'react-redux';
import contactsOperations from './redux/contacts/contacts-operations';

import styles from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { items } = this.props;

    return (
      <>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        {items.length > 1 && <Filter />}
        {items.length > 0 ? (
          <ContactList />
        ) : (
          <p>The contact list is empty. Please add a new contact.</p>
        )}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          newestOnTop
          limit={3}
          transition={Zoom}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

App.propTypes = {
  items: PropTypes.array.isRequired,
  fetchContacts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
