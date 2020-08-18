import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { ICON } from '../../constants';
import Icon from '../Icon';

const Import = ({ onImport }) => {
    const inputRef = useRef(null);

    const openFileSelector = () => {
        inputRef.current.click();
    }

    const importFile = (event) => {
        const files = event?.target?.files;

        if (!files.length) {
            return;
        }

        const file = files[0];
        getFileContent(file).then((content) => {
            let parsedData = JSON.parse(content);
            onImport.call(undefined, parsedData);
        });
    }

    const getFileContent = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                resolve(event.target.result);
            }

            reader.onerror = (event) => {
                reject(event.target.error);
            }

            reader.readAsText(file);
        })
    }

    return (<>
        <input
            type="file"
            accept="text/json"
            style={{ display: 'none' }}
            ref={inputRef}
            onChange={importFile}
        />
        <Icon
            path={ICON.UPLOAD.path}
            viewBox={ICON.UPLOAD.viewBox}
            size={1.5}
            click={openFileSelector}
        />
    </>);
}

Import.propTypes = {
    onImport: PropTypes.func.isRequired
}

export default Import;