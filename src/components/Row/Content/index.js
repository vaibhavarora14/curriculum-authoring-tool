import React from 'react';
import PropTypes from 'prop-types';
import { wrapper, pointer, textInput } from './style';
import { COLOR } from '../../../constants';

const NODE_INDENTATION = 25; // each indentation has difference of 25 pixel

export const Content = ({ style, children, onUpdate, indentation }) => {

    const getWrapperStyles = () => {
        return {
            ...wrapper,
            ...style,
            marginLeft: (NODE_INDENTATION * indentation) + 'px'
        }
    }

    const getTextStyles = () => {
        let style = { ...textInput };

        switch (indentation) {
            case 0:
                style.color = COLOR.SKY_BLUE;
                style.fontWeight = 600;
                break;
            case 1:
                style.color = COLOR.BLACK;
                style.fontWeight = 600;
                break;
            default:
                style.color = COLOR.DARK_GREY
                break;
        }

        return style;
    }

    return (
        <div style={getWrapperStyles()}>
            <span style={pointer}>-</span>
            <input
                onChange={({ target }) => onUpdate?.call(undefined, target.value)}
                style={getTextStyles()}
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