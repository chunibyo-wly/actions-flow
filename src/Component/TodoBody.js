import React from "react";
import {List, Checkbox} from "antd";
import TodoItem from './TodoItem'

const data = [
    {
        text: "1",
        isDone: false
    }
];

class TodoBody extends React.Component {
    render() {
        return (
            <div>
                <List
                    bordered
                    dataSource={this.props.todoList}
                    renderItem={(item) => (
                        <TodoItem todoList={item}/>
                    )}
                />
            </div>
        )
    }
}

export default TodoBody