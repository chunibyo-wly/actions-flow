import React from "react";
import {List, Checkbox} from "antd";
import {CloseOutlined} from "@ant-design/icons";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enter: true
        }
    }

    handleMouseOver() {
        this.setState({
            enter: false
        })
    }

    handleMouseOut() {
        this.setState({
            enter: true
        })
    }

    handleDelete() {
        this.props.deleteTodo(this.props.index)
    }

    handleChange() {
        // this.props.todoList.isDone = !this.props.todoList.isDone
        this.props.changeTodo(this.props.index)
    }

    render() {
        return (
            <List.Item
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseOut={this.handleMouseOut.bind(this)}
            >
                <Checkbox checked={this.props.todoList.isDone} onClick={this.handleChange.bind(this)}>
                    {this.props.todoList.text}
                </Checkbox>
                <CloseOutlined
                    onClick={this.handleDelete.bind(this)}
                    hidden={this.state.enter}
                />
            </List.Item>
        )
    }
}

export default TodoItem