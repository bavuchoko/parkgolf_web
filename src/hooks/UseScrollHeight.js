import { useEffect, useState } from 'react';

function useScrollHeight() {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollHeight = window.scrollY;
            setScrollHeight(currentScrollHeight);

            if (currentScrollHeight > 60) {
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