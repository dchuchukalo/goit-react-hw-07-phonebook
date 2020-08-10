import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

class Filter extends Component {
  componentWillUnmount() {
    this.props.resetFilter();
  }

  render() {
    const { filter, onChange } = this.props;

    return (
      <label className={styles.formTitle}>
        Find contacts by name
        <input
          className={styles.formInput}
          type="text"
          value={filter}
          onChange={onChange}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  resetFilter: PropTypes.func.isRequired,
};

export default Filter;
