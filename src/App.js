import React from 'react';
import './App.css';
import {Row, Col} from 'antd';
import TodoMain from './Component/TodoMain'

function App() {
    return (
        <div>
            <Row>
                <Col span={8} offset={8}>
                    <TodoMain/>
                </Col>
            </Row>
        </div>
    )
}

export default App;
