import Icon from '../../Icon';
import React from 'react';
import { ICON } from '../../../constants';
import PropTypes from 'prop-types'

const Indent = ({ disabled }) => {
    return (
        <Icon size={2} icon={ICON.RIGHT_ARROW} disabled={disabled} />
    );
}

Indent.propTypes = {
    disabled: PropTypes.bool
}

Indent.defaultProps = {
    disabled: false
}

export default Indent;