import React from 'react';

class TodoListFooter extends React.Component {

    state = {
        isHidden: false
    }

    onShowFiltersClick = () => {
        this.setState({
            isHidden: true
        })
    }
    onHideFiltersClick = () => {
        this.setState({
            isHidden: false
        })
    }

    render = (props) => {
        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";
        return (
            <div className="todoList-footer">
                {!this.state.isHidden && <div>
                    <button
                        className={classForAll}
                        onClick={() => {
                            this.props.changeFilter('All')
                        }}
                    >
                        All
                    </button>
                    <button
                        className={classForCompleted}
                        onClick={() => {
                            this.props.changeFilter('Completed')
                        }}
                    >
                        Completed
                    </button>
                    <button
                        className={classForActive}
                        onClick={() => {
                            this.props.changeFilter('Active')
                        }}
                    >
                        Active
                    </button>
                </div>
                }
                {/* {!this.state.isHidden && <span onClick={() => {this.onHideFiltersClick}}>hide</span>}
                {this.state.isHidden && <span onClick={() => {this.onShowFiltersClick}}>show</span>}*/}
            </div>

        );
    }
}

export default TodoListFooter;

