import React from "react";
import {Row, Col, Checkbox, Button} from "antd";

class TodoFooter extends React.Component {
    render() {
        return (
            <Row align="middle">
                <Col span={6}>
                    <Checkbox checked={this.props.allChecked} onClick={this.props.changeAll}>全选</Checkbox>
                </Col>
                <Col span={6}>
                    已完成{this.props.todoDoneCount} / 全部{this.props.todoCount}
                </Col>
                <Col span={6} offset={6}>
                    <Button type="primary" onClick={this.props.clearDone}>清除已完成任务</Button>
                </Col>
            </Row>
        )
    }
}

export default TodoFooter