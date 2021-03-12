import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import { Card } from 'antd';
import { EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Icon } from '@ant-design/compatible';

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
                    style={{ top: 10, background: '#8c8c8c', width: 16, height: 16 }}
                />
            </div>
            <Card.Meta
                avatar={<Icon type={nodeTypes[data.nodeType].icon} style={{ fontSize: '64px', color: nodeTypes[data.nodeType].color}}/>}
                title={nodeTypes[data.nodeType].name}
                description={nodeTypes[data.nodeType].description}
            />
            <div>
                <Handle
                    type="target"
                    position="right"
                    id="b"
                    style={{ top: 10, background: '#8c8c8c', width: 16, height: 16 }}
                />
            </div>
        </Card>
    );
});