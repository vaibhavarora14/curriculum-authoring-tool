import React, { useState } from 'react';
import Button from '../../components/Button';
import Export from '../../components/Export';
import Header from '../../components/Header';
import Import from '../../components/Import';
import Row from '../../components/Row';
import RowControl from '../../components/Row/Controls';
import Node from '../../utils/node';
import { exportImport } from './style';

const START_LEVEL = 0; // starting level of tree

const CurriculumPage = () => {
    const [data, setData] = useState([]);

    const addRow = () => {
        const node = new Node();
        const lastNode = data[data.length - 1];
        if (lastNode) {
            node.level = lastNode.level;
            node.previous = lastNode.id;
            lastNode.next = node.id;
        } else {
            node.level = START_LEVEL;
        }

        setData([
            ...data,
            node
        ])
    }

    const updateText = (text, node) => {
        node.name = text;
        setData([...data]);
    }

    const changeLevel = (node, changeInLevel) => {
        node.level += changeInLevel;
        setData([...data]);
    }

    const outdent = (node) => {
        changeLevel(node, -1);
    }

    const indent = (node) => {
        changeLevel(node, 1);
    }

    const deleteNode = (node, index) => {
        const nodesToBeDeleted = findNodesToBeDeleted(node, index);
        const nodeNotToBeDeleted = (node) => nodesToBeDeleted.indexOf(node) < 0
        const filteredData = data.filter(nodeNotToBeDeleted);
        setData([...filteredData]);
    }

    const findNodesToBeDeleted = (node, index) => {
        const nodesToBeDeleted = [node];

        if (!node.next) {
            return nodesToBeDeleted;
        }

        for (let loopIndex = index + 1; loopIndex < data.length; loopIndex++) {
            const currentNode = data[loopIndex];
            if (currentNode.level <= node.level) {
                currentNode.previous = data[index - 1]?.id;
                break;
            }

            nodesToBeDeleted.push(currentNode);
        }

        return nodesToBeDeleted;
    }

    const canOutdent = (node) => node.level !== START_LEVEL;
    const canIndent = (node) => {
        const previousNode = data.find(child => child.id === node.previous);
        return previousNode?.level >= node?.level;
    };

    return (
        <div style={{ margin: '5rem' }}>
            <div style={exportImport}>
                <Export data={data}></Export>
                <Import onImport={(importedData) => setData(importedData)}></Import>
            </div>
            <Header>
                <Header.Actions>Move, Indent,<br /> Outdent, Delete</Header.Actions>
            </Header>
            {data.map((node, index) =>
                <Row
                    key={index}
                >
                    <RowControl.Move />
                    <RowControl.Outdent disabled={!canOutdent(node)} onOutdent={() => outdent(node)} />
                    <RowControl.Indent disabled={!canIndent(node)} onIndent={() => indent(node)} />
                    <RowControl.Delete onDelete={() => deleteNode(node, index)} />
                    <Row.Content
                        onUpdate={(text) => updateText(text, node)}
                        indentation={node.level}
                    >
                        {node.name}
                    </Row.Content>
                </Row>
            )}

            <Button.Add click={addRow}>
                Add a standard
            </Button.Add>
        </div>
    );
}

export default CurriculumPage;