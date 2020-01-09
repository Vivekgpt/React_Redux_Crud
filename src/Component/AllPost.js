import React from 'react';
import { connect } from 'react-redux';
import Post from './post';
import EditComponent from './EditComponent'

class AllPost extends React.Component {

    sortAsc = () => {
        this.setState({
            data: this.props.data.sort((a, b) => a.title - b.title)
        })
    }

    sortDsc = () => {
        this.setState({
            data: this.props.data.sort((a, b) => a.message - b.message)
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1 className="mt-5">All Posts</h1>
                <button className="sortBtn btn btn-outline-dark m-2" onClick={() => this.sortAsc()}>&#x2B06;</button>
                <button className="sortBtn btn btn-outline-dark m-2" onClick={() => this.sortDsc()}>&#x2B07;</button>
                {this.props.post.map((posts) => (
                    <div key={posts.id}>
                        {posts.isEdit ? 
                        <EditComponent posts={posts} key={posts.id}/>:
                        <Post key={posts.id} posts={posts}/>
                        }
                    </div>
                    )
                )}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (data) => { 
    return{
        post: data
    }
}

export default connect(mapStateToProps) (AllPost)