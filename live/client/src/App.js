/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card.jsx';

function App() {

  const [posts, setPosts] = useState()

  useEffect(async ()=>{
    try{ 
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      if (res.status !== 200)
        throw new Error("Unable to fetch Posts at this time")
      setPosts(res.data)

    }catch(err){
      console.log(err)
    }
  }, [])

  return (
    <div className="App">
      {posts? <>
      {posts.map((post,i) => <Card post={post} key={i}/>)}</>
      :
      <h2>No Posts Available</h2>
}
    </div>
  );
}

export default App;
