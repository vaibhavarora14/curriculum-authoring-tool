import React from 'react';
import { ReactComponent as Drag } from '../../icons/drag.svg';
import { ReactComponent as LeftArrow } from '../../icons/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../icons/right-arrow.svg';
import { ReactComponent as Trash } from '../../icons/trash.svg';
import './Row.css';
import { icon, pointer, row } from './Row.style';

const Row = (props) => {

    return (<div style={{ ...row, ...props.style }}>
        <Drag style={{ ...icon, width: '2rem', height: '2rem' }} />
        <LeftArrow style={{ ...icon, width: '2rem', height: '2rem' }} />
        <RightArrow style={{ ...icon, width: '2rem', height: '2rem' }} />
        <Trash style={{ ...icon, width: '1.5rem', height: '1.5rem', marginRight: '1rem' }} />
        <span style={pointer}>-</span>
        <div suppressContentEditableWarning contentEditable={true} placeholder="Type standard here (e.g. Numbers)">{props.text}</div>
    </div>);
}

export default Row