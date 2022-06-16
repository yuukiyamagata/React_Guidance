import React, { useState } from 'react';
import  jsonplaceholder  from './apis/jsonplaceholder';
import { Resources } from './components/Resources';
import { Button } from './components/Button';



export const App = () => {
  const [resources, setResources ] = useState([]);

  const getPosts = async () => {
    try{
      const posts = await jsonplaceholder.get('/posts');
      setResources(posts.data);
    }catch(err){
      console.error( err )
    }
  }

  const getAlbums = async () => {
    try{
      const albums = await jsonplaceholder.get('/albums');
      setResources(albums.data);
    }catch(err){
      console.error( err )
    }
  }
  return(
    <div className='ui container' style={{ marginTop: '30px'}}>
      <Button onClick={ getPosts } text="Posts" color="primary" />
      <Button onClick={ getAlbums } text="Albums" color="red" />
      <Resources resources={ resources } />
    </div>
  )
}