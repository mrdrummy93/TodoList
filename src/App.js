import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import StudentName from "./JenyaVasilyeu";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
        //     setTimeout(() => {
        //         let newTask = {
        //             title: 'New Task',
        //             isDone: false,
        //             priority: 'high'
        //         }
        //         let newTasks = [...this.state.tasks, newTask]
        //         this.setState({
        //             tasks: newTasks
        //         })
        //     }, 2000)
    }

    state = {
        tasks: [
            {title: "CSS", isDone: true, priority: "low"},
            {title: "JS", isDone: false, priority: "medium"},
            {title: "ReactJS", isDone: false, priority: "high"},
            {title: "Patterns", isDone: true, priority: "medium"},
        ],

        filterValue: "Active"
    }

    onAddTaskClick = () => {
        let title = this.newTaskTitleRef.current.value;
        let newTask = {
            title: title,
            isDone: false,
            priority: 'high'
        }
        let newTasks = [...this.state.tasks, newTask]
        this.newTaskTitleRef.current.value = '';
        this.setState({
            tasks: newTasks
        })
    }


    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader onAddTaskClick={this.onAddTaskClick} refTitleTask={this.newTaskTitleRef}/>
                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter filterValue={this.state.filterValue}/>
                    <StudentName/>
                </div>
            </div>
        );
    }
}

export default App;

