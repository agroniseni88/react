import React from "react";
import { TodoList } from "./TodoList";




class App extends React.Component{

    render(){
        return(
        <div className="App" style={{ padding: "2vh" }}>
            <h1>Homework 2 class 3</h1>
            <TodoList />
        </div>
    )};
}

export default App;
