import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        //1. An Abort Controller
        const abortCont = new AbortController()

        setTimeout(() => {
            //2. Associating the abortController with a specific fetch request
            fetch(url, { signal: abortCont.signal})
                .then(res => {
                    if(!res.ok) {
                        throw Error('Could not fetch the data.')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsLoading(false)
                    setError(null)
                })
                .catch(err => {
                    // 4. Only update state is it IS NOT and abort error
                    if(err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setIsLoading(false)
                        setError(err.message)
                    }
                })
        }, 1000)
        //3. Cleanup function. Aborts whatever fetch it is associated with.
        return () => abortCont.abort()
    }, [url])
    
    return { data, isLoading, error }
}

export default useFetch