import React from "react";
import {List, Checkbox} from "antd";

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class TodoBody extends React.Component {
    render() {
        return (
            <div>
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Checkbox value={item}> {item} </Checkbox>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default TodoBody