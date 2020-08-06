import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  notifyWarn = text => toast.warn(text);
  notifySuccess = text => toast.success(text);

  handleChange = e => {
    const { name, value } = e.currentTarget;
    name === 'number'
      ? this.setState({ [name]: value.replace(/[^\d-]/g, '') })
      : this.setState({ [name]: value });
  };

  isValidContact = newContact => {
    const name = newContact.name.toLowerCase();
    const { number } = newContact;
    const { items } = this.props;

    if (name === '' || number === '') {
      this.notifyWarn(`Please enter name and number`);
      return true;
    }

    if (items.find(contact => contact.name.toLowerCase() === name)) {
      this.notifyWarn(`${newContact.name} is already in contacts.`);
      return true;
    }
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newContact = { id: uuidv4(), ...this.state };
    if (!this.isValidContact(newContact)) {
      const { addContact } = this.props;

      addContact(newContact);
      this.notifySuccess('Added successfully');
      this.reset();
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.formTitle}>
          Name
          <input
            className={styles.formInput}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>

        <label className={styles.formTitle}>
          Number
          <input
            className={styles.formInput}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>

        <button className={styles.addToContact} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  addContact: newContact => dispatch(contactsOperations.addContact(newContact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
