import React from "react";
import {Card} from "antd";
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
        this.allChecked()
    }

    deleteTodo(index) {
        this.state.todoList.splice(index, 1)
        this.allChecked()
    }

    changeTodo(index) {
        this.state.todoList[index].isDone = !this.state.todoList[index].isDone
        this.allChecked()
    }

    changeAll() {
        this.setState({
            todoList: this.state.todoList.map((todo) => {
                todo.isDone = !this.state.isAllChecked;
                return todo;
            }),
            isAllChecked: !this.state.isAllChecked
        });
    }

    clearDone() {
        this.state.todoList = this.state.todoList.filter(todo => !todo.isDone)
        this.allChecked()
    }

    render() {
        return (
            <Card title="Todo List">
                <TodoHeader
                    addTodo={this.addTodo.bind(this)}
                />
                <br/>
                <TodoBody
                    todoList={this.state.todoList}
                    deleteTodo={this.deleteTodo.bind(this)}
                    changeTodo={this.changeTodo.bind(this)}
                />
                <br/>
                <TodoFooter
                    allChecked={this.state.isAllChecked}
                    todoDoneCount={(this.state.todoList && this.state.todoList.filter((todo) => todo.isDone)).length || 0}
                    todoCount={this.state.todoList.length || 0}
                    clearDone={this.clearDone.bind(this)}
                    changeAll={this.changeAll.bind(this)}
                />
            </Card>
        )
    }

}

export default TodoMain