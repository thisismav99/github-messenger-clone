import { useState, useEffect, useRef } from "react";

const useTitle = (pageTitle) => {
    const [title, setTitle] = useState("MESSENGER CLONE");
    const subscribe = useRef(false);
    
    useEffect(() => {
        subscribe.current = true;

        if(subscribe){
            setTitle(pageTitle);
        }

        return () => subscribe.current = false;
    }, [pageTitle]);

    document.title = title;
}

export default useTitle;