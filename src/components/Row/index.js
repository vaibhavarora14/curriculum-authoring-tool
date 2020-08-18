import React from 'react';
import Content from './Content';
import { row } from './Row.style';

const Row = (props) => {
    return (
        <div
            draggable={true}
            data-testid={props['data-testid']}
            style={{ ...row, ...props.style }}
        >
            {props.children}
        </div>);
}

Row.Content = Content;

export default Row;