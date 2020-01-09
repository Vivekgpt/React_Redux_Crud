import React from 'react';
import { connect } from 'react-redux';


class EditComponent extends React.Component {
    constructor(){
        super()

        this.state = {
            newTitle: "",
            newMessage: ""
        }
    }

    handleEdit = (e) => {
        e.preventDefault();

        const datas = {
            newTitle: this.state.newTitle,
            newMessage: this.state.newMessage
        }
        this.props.dispatch({
            data: datas,
            type: 'UPDATE',
            id: this.props.posts.id
        })
        console.log("Updated", datas)
    }

    changeEdit = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render(){
        return(
            <React.Fragment>
                <form>
                    <div className="m-3">
                        <input required type="text" placeholder="Enter post title" name="newTitle" onChange={this.changeEdit} value={this.state.newTitle}/>
                    </div>
                    <div>
                        <textarea required type="text" cols="28" placeholder="Enter post message" name="newMessage" onChange={this.changeEdit} value={this.state.newMessage}/>
                    </div>
                    <button onClick={this.handleEdit} className="postBtn btn btn-outline-dark">Update</button>
                </form>
            </React.Fragment>
        )
    }
}

export default connect() (EditComponent);