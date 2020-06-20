import React from "react";
import {Card, Divider} from "antd";
import TodoFooter from './TodoFooter'
import TodoBody from "./TodoBody";

class TodoMain extends React.Component {
    render() {
        return (
            <Card title="Todo List">
                <TodoBody/>
                <Divider orientation="left"/>
                <TodoFooter/>
            </Card>
        )
    }

}

export default TodoMain