import { useEffect } from 'react';

const useIntersectionObserver = (
    ref: React.RefObject<HTMLElement>,
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit = {}
) => {
    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(callback, options);
        observer.observe(ref.current);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);
};

export default useIntersectionObserver;
