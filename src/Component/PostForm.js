import React from 'react';
import { connect } from 'react-redux';

class PostForm extends React.Component {
    constructor(){
        super()

        this.state = {
            title:"",
            message:"",
            isEdit: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            id: Math.random(),
            title:this.state.title,
            message: this.state.message
        }
        this.props.dispatch({
            data, 
            type: "ADD"
        })
        this.reset()
        console.log("Submited", data)
    }

    reset = () => {
        this.setState({
            title: "",
            message: ""
        })
    }

    changeData = (data) => {
        this.setState({
            [data.target.name]: data.target.value
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="m-3">
                        <input type="text" required placeholder="Enter post title" name="title" onChange={this.changeData} value={this.state.title}/>
                    </div>
                    <div>
                        <textarea required type="text" cols="28" placeholder="Enter post message" name="message" onChange={this.changeData} value={this.state.message}/>
                    </div>
                    <button className="postBtn btn btn-outline-dark">Post</button>
                </form>
            </React.Fragment>
        )
    }
}

export default connect() (PostForm);