import { useState, useEffect } from 'react'
import BlogList from '../BlogList/BlogList'
import './Home.css'

const Home = () => {
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
    const [blogs, setBlogs] = useState(hardCodeBlogs)
    const [name, setName] = useState('Stesha')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('useEffect ran')
        console.log(name)
    }, [name])

    return ( 
        <div className='home'>
            <BlogList blogs={ blogs } title="All Blogs!" handleDelete={ handleDelete } />
            <button onClick={() => setName('LaStesha, the Carnival Queen')}>Surprise!</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home
