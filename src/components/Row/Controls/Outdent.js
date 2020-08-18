import Icon from "../../Icon";
import { ICON } from "../../../constants";
import React from 'react';
import PropTypes from 'prop-types';

const Outdent = ({ disabled }) => {
    return (
        <Icon size={2} icon={ICON.DRAG} disabled={disabled} />
    );
}

Outdent.propTypes = {
    disabled: PropTypes.bool
}

Outdent.defaultProps = {
    disabled: false
}

export default Outdent;