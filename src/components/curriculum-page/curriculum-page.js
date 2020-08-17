import React, { useState } from 'react';
import Node from '../../utils/node';
import { randomString } from '../../utils/string';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { button, plusIcon } from './curriculum-page.style';
import Row from '../Row/Row';

const CurriculumPage = () => {
    const [data, setData] = useState([]);

    // TODO: Remove below `handleEnter`, it's just for POC
    const handleEnter = (event) => {
        if (event.key !== 'Enter') {
            return;
        }

        const node = new Node(randomString(5), event.target.value);

        if (data.length > 0) {
            if (data.length % 2 === 0) {
                node.parent = data[data.length - 1];
            } else {
                node.previous = data[data.length - 1];
            }
        }

        setData([
            ...data,
            node
        ]);
    }

    const filterTopParent = () => {
        return data.filter(node => node.parent === undefined);
    }

    const getChildren = (id, leftIndentation) => {
        if (!leftIndentation) {
            leftIndentation = 25;
        } else {
            leftIndentation += 25;
        }

        const childrenFiltered = data.filter(node => node?.parent?.id === id);

        if (childrenFiltered.length === 0) {
            return <></>;
        } else {
            return childrenFiltered.map((node, index) =>
                <>
                    <Row key={index} contentStyle={{ paddingLeft: leftIndentation + 'px' }} text={node.name} />
                    {getChildren(node.id, leftIndentation)}
                </>
            );
        }

    }

    console.log(data);

    return (<div style={{ margin: '5rem' }}>

        {/* Remove below `input`, it's just for POC */}
        <input onKeyUp={handleEnter} style={{ marginBottom: '3rem' }} />

        {filterTopParent().map((node, index) =>
            <>
                <Row key={index} text={node.name} />
                {getChildren(node.id)}
            </>
        )}

        <button style={{ ...button, width: '100%' }}>
            <Plus style={plusIcon} />
            Add a standard
        </button>
    </div>);
}

export default CurriculumPage;