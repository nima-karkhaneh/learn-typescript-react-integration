import { useEffect, useState, type ReactNode } from "react";
import { get } from "./util/https";
import BlogPosts, { type BlogPost } from "./components/BlogPosts";
import fetchingImg from './assets/data-fetching.png';
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPosts = {
  id: number,
  title: string,
  body: string,
  userId: number
}



function App() {
  const [fetchedPost, setFetchedPost] = useState<BlogPost[] | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    async function fetchPost() {
      setIsFetching(true)
      try {
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
      setFetchedPost(blogPost)
      }
      catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }
      
    setIsFetching(false)
    
    };
    fetchPost()
  }, [])

  let content: ReactNode

   if (error) {
    content = <ErrorMessage text={error} />
  }

  if (fetchedPost) {
    content = <BlogPosts posts={fetchedPost} />
  }
 
  if (isFetching) {
    content = <p id="loading-fallback">Fetching Posts...</p>
  }

  return(
    <main>
      <img src={fetchingImg} alt="An abstract image depicting a data fetching process." />
      {content}
    </main>
  )
}
export default App;
