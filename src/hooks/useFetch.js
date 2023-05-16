import React, { useEffect, useState } from 'react'

function useFetch(url, options= {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
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
        })();
    }, [url])

    return [data, loading, error];
}

export default useFetch