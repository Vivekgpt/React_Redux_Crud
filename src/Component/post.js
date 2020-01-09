import React from 'react';
import { connect } from 'react-redux';

class Post extends React.Component {
    render(){
        return(
            <React.Fragment>
                <hr/>
                <h2>{this.props.posts.title}</h2>
                <p>{this.props.posts.message}</p>
                <button onClick={()=>this.props.dispatch({type:'EDIT',id:this.props.posts.id})} className="m-1 rounded"> &#x270E;</button>
                <button onClick={()=>this.props.dispatch({type:'DELETE',id:this.props.posts.id})} className="m-1 rounded">&#x2716;</button>
            </React.Fragment>
        )
    }
}

export default connect() (Post);