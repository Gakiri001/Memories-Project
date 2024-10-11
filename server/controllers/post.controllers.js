import PostMessage from "../models/postMessage.js"


export const getPosts = async (req,res) => {
  try {
    const postMessages = await PostMessage.find()
    res.status(200).json(postMessages)
    //The request succeeded
  } catch (error) {
    res.status(404).json({ message:error.message})
    //The server cannot find the requested resource(Not Found)
  }
}

export const createPost = async (req,res) => {
  const post = req.body;

  const newPost = new PostMessage(post)

  try {
    await newPost.save()
    res.status(201).json(newPost)
    //The request succeeded, and a new resource was created as a result
  } catch (error) {
    res.status(409).json({message:error.message})
    //This response is sent when a request conflicts with the current state of the server(Conflit)
  }
}