import { useParams } from 'react-router-dom'
import useFetch from '../../customHooks/useFetch'

const BlogDetails = () => {
    const { id } = useParams()
    const { data, error, isLoading } = useFetch()
    return ( 
        <div className='blog-details'>
            <h2>The Big Easy, Baby! { id }</h2>
        </div>
     );
}
 
export default BlogDetails;