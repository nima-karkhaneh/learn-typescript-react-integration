import { useEffect, useState, type ReactNode } from "react";
import { get } from "./util/https";
import BlogPosts, { type BlogPost } from "./components/BlogPosts";
import fetchingImg from './assets/data-fetching.png';

type RawDataBlogPosts = {
  id: number,
  title: string,
  body: string,
  userId: number
}



function App() {
  const [fetchedPost, setFetchedPost] = useState<BlogPost[] | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false)
  useEffect(() => {
    async function fetchPost() {
      setIsFetching(true)
      const data = await get(
        'https://jsonplaceholder.typicode.com/posts'
      ) as RawDataBlogPosts[]

      const blogPost: BlogPost[] = data.map(post => {
      return {
        id: post.id,
        title:post.title,
        text:post.body
      }
    })
    setIsFetching(false)
    setFetchedPost(blogPost)
    };
    fetchPost()
  }, [])

  let content: ReactNode

    if (isFetching) {
    content = <p id="loading-fallback">Fetching Posts...</p>
  }
  
  if (fetchedPost) {
    content = <BlogPosts posts={fetchedPost} />
  }



  return(
    <main>
      <img src={fetchingImg} alt="" />
      {content}
    </main>
  )
}
export default App;
