import './Create.css'
import { useState } from 'react'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Tom')

    return ( 
        <div className='create'>
            <h2>Tell Me Somethin', Mistah!</h2>
            <form>
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
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;