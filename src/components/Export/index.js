import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { ICON } from '../../constants';
import Icon from '../Icon';

const Export = ({ data }) => {
    const [href, setHref] = useState('');

    useEffect(() => {
        if (data.length === 0) {
            setHref(`javascript:void(0)`);
        } else {
            setHref(`data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`);
        }
    }, [data]);

    return (<>
        <a
            href={href}
            download="data.json"
        >
            <Icon
                path={ICON.DOWNLOAD.path}
                viewBox={ICON.DOWNLOAD.viewBox}
                size={1.5}
                disabled={data.length === 0}
            />
        </a>
    </>);
}

Export.propTypes = {
    data: PropTypes.array
}

export default Export;