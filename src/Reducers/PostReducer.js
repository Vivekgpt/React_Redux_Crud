const PostReducers = (state = [], action) => {
    switch(action.type) {
        case 'ADD' :
            return state.concat([action.data]);
        case 'DELETE' :
            return state.filter((posts) => posts.id !== action.id);
        case 'EDIT' :
            return state.map((posts) => posts.id === action.id ? {...posts, isEdit: ! posts.isEdit}:posts)
        case 'UPDATE' :
            return state.map((posts) => {
                if (posts.id === action.id){
                    return {
                        ...posts,
                        title: action.data.newTitle,
                        message: action.data.newMessage,
                        isEdit: !posts.isEdit
                    }
                }else return posts;
            })
        default:
            return state;
    }
}

export default PostReducers;