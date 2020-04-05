import React from 'react';
import App from './App.css'

class TodoListHeader extends React.Component {
    state = {
        error: true,
        title: ''
    }

    onAddTaskClick = () => {
        let newTitle = this.state.title;
        this.setState({title: ''});
        if (newTitle === '') {
            this.setState({error: true})
        } else {
            this.setState({error: false})
            this.props.AddTask(newTitle)
        }
    }

    onAddTaskKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.onAddTaskClick();
        }
    }

    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    }

    render = (props) => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input className={this.state.error ? 'error' : ''}
                           type="text"
                           placeholder="New task name"
                           onKeyPress={(e) => {
                               this.onAddTaskKeyPress(e)
                           }}
                           onChange={this.onTitleChanged}
                           value={this.state.title}/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

