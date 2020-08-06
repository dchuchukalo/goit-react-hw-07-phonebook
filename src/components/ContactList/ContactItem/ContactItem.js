import React from 'react';
import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number, onDelete }) => (
  <li className={styles.item}>
    <span className={styles.info}>
      {name}: {number}
    </span>
    <button className={styles.delete} onClick={onDelete} type="button">
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
