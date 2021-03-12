import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import { Card } from 'antd';
import Icon, { EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import nodeTypes from "../nodeTypes.json";

export default memo(({ data }) => {
    return (
        <Card
            style={{ width: 300 }}
            actions={[
                <SettingOutlined key="setting" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <div>
                <Handle
                    type="source"
                    position="left"
                    id="a"
                    style={{ top: 10, background: '#ffbb96', width: 20, height: 20 }}
                />
            </div>
            <Card.Meta
                avatar={<Icon type={nodeTypes[data.nodeType].icon} theme = "outlined"/>} /*TODO: not showing an icon, fix*/
                title={nodeTypes[data.nodeType].name}
                description={nodeTypes[data.nodeType].description}
            />
            <div>
                <Handle
                    type="target"
                    position="right"
                    id="b"
                    style={{ top: 10, background: '#69c0ff', width: 20, height: 20 }}
                />
            </div>
        </Card>
    );
});