import BlogList from '../BlogList/BlogList'
import './Home.css'
import useFetch from '../../customHooks/useFetch'

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')    

    return ( 
        <div className='home'>
            {/*Below is 'conditional templating" in React*/}
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div> }
            { blogs && <BlogList blogs={ blogs } title="All Blogs!" /> }
        </div>
     );
}
 
export default Home
