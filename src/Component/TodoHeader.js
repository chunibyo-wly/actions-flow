import React from "react";
import {Input} from "antd";
import {UserOutlined} from '@ant-design/icons';

class TodoHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleKeyUp(e) {
        // 监听回车事件
        if (e.keyCode === 13) {
            let value = e.target.value
            if (!value) return false

            let todoItem = {
                text: value,
                isDone: false
            }

            this.setState({
                value: ""
            })
            this.props.addTodo(todoItem)
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Input onKeyUp={this.handleKeyUp.bind(this)}
                       onChange={this.handleChange.bind(this)}
                       value={this.state.value}
                       placeholder="请输入你的任务名称，按回车键确认"
                       type="text"
                       prefix={<UserOutlined/>}
                />
            </div>
        );
    }
}

export default TodoHeader