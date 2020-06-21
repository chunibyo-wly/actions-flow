import React from "react";
import {Card, Divider} from "antd";
import TodoFooter from './TodoFooter'
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";

class TodoMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            isAllChecked: false
        }
    }

    allChecked() {
        let isAllChecked = false;
        if (this.state.todoList.every(todo => todo.isDone)) {
            isAllChecked = true;
        }
        this.setState({   //改变状态，组件重绘
            todoList: this.state.todoList,
            isAllChecked: isAllChecked
        });
    }

    addTodo(todoItem) {
        this.state.todoList.push(todoItem)
        console.log(this.state.todoList)
        this.allChecked()
    }

    render() {
        return (
            <Card title="Todo List">
                <TodoHeader addTodo={this.addTodo.bind(this)}/>
                <br/>
                <TodoBody todoList={this.state.todoList}/>
                <br/>
                <TodoFooter/>
            </Card>
        )
    }

}

export default TodoMain