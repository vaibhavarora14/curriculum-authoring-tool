import React from 'react';
import PropTypes from 'prop-types';
import { icon as iconStyle, icon__disabled } from './style';

const Icon = ({ size, color, disabled, icon, viewBox }) => {
    const getStyles = () => {
        let style = { ...iconStyle };

        if (disabled) {
            style = { ...style, ...icon__disabled };
        }

        return style;
    }

    return (
        <svg
            style={getStyles()}
            width={`${size}rem`}
            height={`${size}rem`}
            viewBox={viewBox}
        >
            <path
                fill={color}
                d={icon}
            ></path>
        </svg>
    );
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    viewBox: PropTypes.string
};

Icon.defaultProps = {
    size: 1.5,
    viewBox: '0 0 50 50',
    color: '#BDBDBD',
    disabled: false
};

export default Icon;