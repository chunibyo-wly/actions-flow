import React from "react";
import {Row, Col, Switch, Button} from "antd";

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

class TodoFooter extends React.Component {
    render() {
        return (
            <Row align="middle">
                <Col span={6}>
                    <Switch defaultChecked onChange={onChange}/>
                </Col>
                <Col span={6}>已完成1 / 全部3</Col>
                <Col span={6} offset={6}>
                    <Button type="primary">
                        清除已完成任务
                    </Button>
                </Col>
            </Row>
        )
    }
}

export default TodoFooter