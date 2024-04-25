import { useEffect, useState } from "react";

const useDebounce = (searchValue) => {
    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(() => {
    const timeout = setTimeout(() => {
        setSearchKeyword(searchValue);
    }, 500);

    return () => clearTimeout(timeout);
    }, [searchValue]);

    return {searchKeyword};
}

export default useDebounce;