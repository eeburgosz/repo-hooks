import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {

    const isMounted = useRef(true);

    useEffect(() => {
        
        return () => {
            isMounted.current= false;
        }
    }, []);

    const [state, setState] = useState({
        data: null,
        error: null,
        loading: true
    });

    useEffect( ()=> {
        fetch(url).then(resp=> resp.json()).then(data=> {
            if(isMounted.current){
                setTimeout(() => {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });                
                }, 2000);
            };
        });
    }, [url]);

    return state;

};
