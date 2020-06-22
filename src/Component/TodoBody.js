import React from "react";
import {List} from "antd";
import TodoItem from './TodoItem'

class TodoBody extends React.Component {
    render() {
        let {todoList, ...others} = this.props
        return (
            <div>
                <List
                    bordered
                    dataSource={todoList}
                    renderItem={(item, index) => (
                        <TodoItem todoList={item} index={index} {...others}/>
                    )}
                />
            </div>
        )
    }
}

export default TodoBody