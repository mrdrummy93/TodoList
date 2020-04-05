import React from 'react';

class TodoListTask extends React.Component {
    state = {
        editMode: false
    }

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
    }

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render = (props) => {
        /* let taskClass = this.props.task.isDone
             ? 'todoList-task done'
             */
        return (
            <div className="todoList-task">
                <input type="checkbox"
                       checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>
                {this.state.editMode
                    ? <input autoFocus={true}
                             value={this.props.task.title}
                             onBlur={this.deactivateEditMode}
                             onChange={this.onTitleChanged}/>
                    : <span onClick={this.activateEditMode}>{this.props.task.id}:{this.props.task.title}</span>
                }
                <span> priority - {this.props.task.priority}</span>
            </div>
        );
    }
}

export default TodoListTask;

