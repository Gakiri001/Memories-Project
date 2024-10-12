import React from 'react'
import Post from './Post/Post'
import useStlyles from "./styles"

const Posts = () =>{
  const classes = useStlyles()
  return (
    <>
      <h1>Posts</h1>
      <Post/>
      <Post/>
    </>
  
  )
}

export default Posts