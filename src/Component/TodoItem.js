import React from "react";
import {List, Checkbox} from "antd";

class TodoItem extends React.Component {
    render() {
        return (
            <List.Item>
                <Checkbox>{this.props.todoList.text}</Checkbox>
            </List.Item>
        )
    }
}

export default TodoItem