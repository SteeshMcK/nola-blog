const Create = () => {
    return ( 
        <div className='create'>
            <h2>Tell Me Somethin', Mistah!</h2>
            <form>
                <label>Blog title:</label>
                <input
                    type='text'
                    required
                />
                <label>Blog body:</label>
                <textarea
                    required
                ></textarea>
                <label>Blog author:</label>
                <select>
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