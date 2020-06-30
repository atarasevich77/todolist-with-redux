import React from 'react';
import {connect} from "react-redux";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import TodosList from "./components/TodosList/TodosList";

function App(props) {
    const serverStatus = {
        color: props.serverConnect ? 'green' : 'red'
    }

    return (
        <div className="container">
            <div className="row justify-content-sm-end">
                Server status: &nbsp; <span style={serverStatus}>{props.serverConnect ? 'Ok' : 'Down'}</span>
            </div>
            <h2 className="text-center p-3">React/Redux Todo list</h2>
            <div className="row justify-content-center p-2">
                <CreateTodo />
            </div>
            <div className="row justify-content-center p-2">
                <TodosList />
            </div>
        </div>
    );
}
const mapStateToProps = (state) => (
    {serverConnect: state.serverConnect}
);

export default connect(mapStateToProps, null)(App);
