import PropTypes from 'prop-types';
import React from 'react';
import Add from './add';
import { button } from './style';

const Button = ({ style, click, children }) => {
    return (
        <button
            style={{ ...button, ...style }}
            onClick={click}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    style: PropTypes.object,
    click: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string
    ])
}

Button.defaultProps = {
    style: {},
    click: () => { },
    children: ''
}

Button.Add = Add;
export default Button;