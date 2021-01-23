import { useParams, useHistory } from 'react-router-dom'
import useFetch from '../../customHooks/useFetch'
import './BlogDetails.css'

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
            console.log('See Ya!')
        })
    }
    return ( 
        <div className='blog-details'>
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;