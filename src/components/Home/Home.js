import { useState } from 'react'
import BlogList from '../BlogList/BlogList'
import './Home.css'

const hardCodeBlogs = [
    {title: 'I wish I was in New Orleans',
     body: 'Well, I wish I was in New Orleans, I can see it in my dreams, Arm-in-arm down Burgundy, a bottle and my friends and me',
     author: 'Tom',
     id: 1
    },
    {title: 'Sweet Home New Orleans',
     body: 'Sweet Home New Orleans. I can sure \'nuff hear you calling. Feel that gentle rain be falling. Say \'Where y\'at my darling.',
     author: 'Dr. John',
     id: 2
    },
    {title: 'Zydeco sont pas sale',
     body: 'T\'as volé mon gilet, T\'as volé mon chapeau, Garde hip et taïaut, Les haricots sont pas salés.',
     author: 'Monsieur Chenier',
     id: 3
    }
]

const Home = () => {
    const [blogs, setBlogs] = useState(hardCodeBlogs)
    
    return ( 
        <div className='home'>
            <BlogList blogs={ blogs } title="All Blogs!" />
            <BlogList blogs={ blogs.filter((blog) => blog.author === 'Tom') } title="Tom's Blogs!" />
        </div>
     );
}
 
export default Home