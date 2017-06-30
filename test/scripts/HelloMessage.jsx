import React from 'react';
import PropTypes from 'prop-types';

const HelloMessage = ({ name }) => (<div>Hello {name}!</div>);
HelloMessage.propTypes = {
    name: PropTypes.string.isRequired,
};

export default HelloMessage;
