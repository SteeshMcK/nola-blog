import './Create.css'
import { useState } from 'react'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Tom')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit =(e) => {
        e.preventDefault()
        const blog = { title, body, author }

        setIsLoading(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsLoading(false)
        })  
        console.log(blog)
    }

    return ( 
        <div className='create'>
            <h2>Tell Me Somethin', Mistah!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value='Tom'>Tom</option>
                    <option value='Dr. John'>Dr. John</option>
                    <option value='Queen LaStesha'>Queen LaStesha</option>
                </select>
                {/* Ternary operators are COOL! */}
                { !isLoading ? <button>Add Blog</button> : <button disabled>Adding Blog...</button> }
            </form>
        </div>
     );
}
 
export default Create;