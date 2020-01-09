import React from 'react';
import './App.css';
import AllPost from './Component/AllPost';
import PostForm from './Component/PostForm';

function App() {
  return (
    <div className="App">
      <PostForm/>
      <AllPost/>
    </div>
  );
}

export default App;
