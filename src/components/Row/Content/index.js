import React from 'react';
import PropTypes from 'prop-types';
import { wrapper, pointer, textInput } from './style';

const NODE_INDENTATION = 25; // each indentation has difference of 25 pixel

export const Content = ({ style, children, onUpdate, indentation }) => {

    const getWrapperStyles = () => {
        return {
            ...wrapper,
            ...style,
            marginLeft: (NODE_INDENTATION * indentation) + 'px'
        }
    }

    return (
        <div style={getWrapperStyles()}>
            <span style={pointer}>-</span>
            <input
                onChange={({ target }) => onUpdate?.call(undefined, target.value)}
                style={textInput}
                value={children}
                placeholder="Type standard here (e.g. Numbers)" />
        </div>
    );
}

Content.propTypes = {
    style: PropTypes.object,
    children: PropTypes.string,
    onUpdate: PropTypes.func,
    indentation: PropTypes.number
}

Content.defaultProps = {
    style: {},
    indentation: 0
}

export default Content;