import { useEffect, useState } from 'react';
import axios from "axios";

const useFetch = (url) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState("");
  
    useEffect (() => {
      axios.get(url)
        .then((res) => {
          setLoading(false);
          setData(res.data)
        } )
        .catch((err) => {
          setLoading(false);
          setError(err.message)
        } )
    }, [url])
    return ( 
        {error, loading, data}
     );
}
 
export default useFetch;