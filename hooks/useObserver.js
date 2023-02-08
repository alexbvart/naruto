import { useEffect, useState, useRef } from 'react';
let options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0
};
const useObserver = (ref) => {
    const [isOnScreen, setIsOnScreen] = useState(false);
    useEffect(() => {

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsOnScreen(true);
                } else {
                    setIsOnScreen(false);
                }
            });
        };
        const observer = new IntersectionObserver( observerCallback, options);
        // const observer = new IntersectionObserver(([entry]) => {
        //     setIsOnScreen(entry.isIntersecting)
        // }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect(ref.current);
        };
    }, []);

    return {isOnScreen};
}
export default useObserver;