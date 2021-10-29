import { Component } from "react";
 
class Todo extends Component {
    constructor(props){
        super(props);
            this.state = {
                tasks:[]
            }
        }

        handler=(event)=>{
            let{name, value} = event.target;
            this.setState({ [name]:value });
        };

        add=()=>{
            let { tasks, title ,priority} = this.state;
            if(document.getElementById("title").value == '' || document.getElementById("priority").value == '0'){
                alert("Please fill out fields");
            }

            else {
                this.setState({ tasks: [...tasks, {title: title, priority: priority}] });
                let taks = localStorage.setItem("Tasks",JSON.stringify(this.state.tasks));
                console.log(taks)
                document.getElementById("title").value = "";
                document.getElementById("priority").value = "0";
                console.log(this.state)
            }
        }

        delete=(index)=>{
            console.log("delete");
            var bool = window.confirm("Do you really want to delete this?")
            if(bool == true) {
                let {tasks } = this.state;
                tasks.splice(index, 1)
                this.setState({
                    tasks: tasks
                })
                localStorage.setItem("Tasks",JSON.stringify(this.state.tasks));

            }
        }

        edit=(index)=>{
            console.log(index);
            // let { tasks } = this.state;
            
           
            // const element = tasks[index].title;
            // element.style.textDecorationLine = "line-through";
            // element.classList.toggle("crossed-line");
            
        }


        render() {
            return (
                <div className="centask container">
                    <h1>Todo List</h1>
                    <div>
                        <h5 >Add Tasks</h5>
                        <input className="form-control col-md-6 ml-3" onChange={this.handler} name="title" id="title" />  
                    </div>
                    <br />
                    <div>
                        <h5 >Priority</h5>
                        <input className="form-control col-md-2 ml-3" type="range" min="0" max="5" onChange={this.handler} name="priority" id="priority"></input>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={this.add}>Add task</button><br />
                    </div>               

                    <br />
                    <br />

                    <div>
                        <table className="table table-striped">
                            <thead>
                                <th>Sr.no</th>
                                <th>Task</th>
                                <th>Priority</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                {this.state.tasks.map((task, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{task.title}</td>
                                            <td>{task.priority}</td>
                                            <td><button className="btn btn-success" onClick={()=>this.edit(index)}>Complete</button>&nbsp;
                                            <button className="btn btn-danger" onClick={() => this.delete(index)}>Delete</button></td>

                                        </tr>
                                    )
                                })}
                            </tbody>

                        </table>
                    </div>
                </div>

            )

        }
    }
export default Todo