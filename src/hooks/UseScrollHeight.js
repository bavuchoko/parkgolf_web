import { useEffect, useState } from 'react';
import {useSelector} from "react-redux";

function useScrollHeight() {
    const [scrollHeight, setScrollHeight] = useState(0);
    const gray = useSelector((state) => state.gray);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollHeight = window.scrollY;
            setScrollHeight(currentScrollHeight);

            if (currentScrollHeight >= 60 && gray) {
                console.log(gray)
                document.body.style.backgroundColor = '#e7e7e7';
            } else {
                document.body.style.backgroundColor = '#ffffff';
            }

        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollHeight;
}

export default useScrollHeight;