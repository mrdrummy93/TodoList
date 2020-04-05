import React from 'react';
import TodoListTask from './TodoListTask';

class TodoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map((task) => {
            return (
                <TodoListTask
                    task={task}
                    changeStatus={this.props.changeStatus}
                    changeTitle={this.props.changeTitle}
                />
            )
        });
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

