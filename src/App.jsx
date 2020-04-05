import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }

    nextTaskId = 0;

    state = {
        tasks: [
           /* {id: 0, title: "CSS", isDone: true, priority: "low"},
            {id: 1, title: "JS", isDone: true, priority: "medium"},
            {id: 2, title: "ReactJS", isDone: true, priority: "high"},
            {id: 3, title: "Patterns", isDone: false, priority: "medium"},*/
        ],

        filterValue: "All"
    }

    AddTask = (newTitle) => {
        let newTask = {
            id: this.nextTaskId,
            title: newTitle,
            isDone: false,
            priority: 'high'
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks: newTasks
        }, this.saveState);
    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        }, this.saveState)
    }

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id === taskId) {
                return {...t, ...obj};
            } else {
                return t;
            }
        });
        this.setState({
            tasks: newTasks
        }, this.saveState)
    }

    changeStatus = (taskId, newValue) => {
        this.changeTask(taskId, {isDone: newValue}, this.saveState)
    }

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title}, this.saveState)
    }

    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        let stateAsAString = JSON.stringify(this.state)
        localStorage.setItem('ourState', stateAsAString)
    }

    restoreState = () => {
        let state = {
            tasks: [],
            filterValue: 'All'
        };
        let stateAsAString = localStorage.getItem('ourState');
        if(stateAsAString !== null){
            state = JSON.parse(stateAsAString);
        }
        this.setState(state, () => {
            this.state.tasks.forEach(t => {
                if (t.id >= this.nextTaskId){
                    this.nextTaskId = t.id + 1;
                }
            })
        });
    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader AddTask={this.AddTask}/>
                    <TodoListTasks
                        changeTitle={this.changeTitle}
                        changeStatus={this.changeStatus}
                        tasks={this.state.tasks.filter(t => {
                            switch (this.state.filterValue) {
                                case 'Active':
                                    return !t.isDone;
                                case 'Completed':
                                    return t.isDone;
                                case 'All':
                                    return true;
                                default:
                                    return true;
                            }
                        })}/>
                    <TodoListFooter
                        filterValue={this.state.filterValue}
                        changeFilter={this.changeFilter}
                    />
                </div>
            </div>
        );
    }
}

export default App;

