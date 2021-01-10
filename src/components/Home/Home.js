const Home = () => {

    const handleClick = (e) => {
        console.log("Where y'at?", e.target)
    }
    return ( 
        <div className='home'>
            <h2>Home</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;