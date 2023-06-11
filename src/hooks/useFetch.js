import React, { useEffect, useState } from 'react'

function useFetch(url, options) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        if(!url) return;
        setLoading(true);
        setTimeout(() => {
            (async function fetchData() {
                try {
                    const response = await fetch(url, options);
                    if(!response.ok) throw new Error();
                    const data = await response.json();
                    setData(data);
                    setLoading(false)
                } catch(e) {
                    setLoading(false)
                    setError(e.message);
                }
            })()
        }, 3000);;
    }, [url])
    return [data, loading, error];
}

export default useFetch