import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = (await axios.get(url)).data
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
                console.log(error);
            }
        }
        getData();
    }, [url]);

    return {isLoading, isError, data};
} 

export default useFetch;