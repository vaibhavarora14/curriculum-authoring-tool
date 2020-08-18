import React from 'react';
import PropTypes from 'prop-types';
import { icon as iconStyle, icon__disabled } from './style';

const Icon = ({ size, color, disabled, path, viewBox, click }) => {
    const getStyles = () => {
        let style = { ...iconStyle };

        if (disabled) {
            style = { ...style, ...icon__disabled };
        }

        return style;
    }

    const clickHandler = () => {
        if (disabled) {
            return;
        }

        click.call();
    }

    return (
        <svg
            style={getStyles()}
            width={`${size}rem`}
            height={`${size}rem`}
            viewBox={viewBox}
            onClick={clickHandler}
        >
            <path
                fill={color}
                d={path}
            ></path>
        </svg>
    );
};

Icon.propTypes = {
    path: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    viewBox: PropTypes.string,
    click: PropTypes.func,
};

Icon.defaultProps = {
    size: 1.5,
    viewBox: '0 0 50 50',
    color: '#BDBDBD',
    disabled: false,
    click: () => { },
};

export default Icon;