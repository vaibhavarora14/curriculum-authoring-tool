import React from 'react';
import Content from './Content';
import { row } from './style';

const Row = (props) => {
    return (
        <div
            style={{ ...row, ...props.style }}
        >
            {props.children}
        </div>);
}

Row.Content = Content;

export default Row;