import { useEffect } from 'react';

const useIntersectionObserver = (
    ref: React.RefObject<HTMLElement>,
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit = {}
) => {
    useEffect(() => {
        const currentElement = ref.current;
        if (!currentElement) return;

        const observer = new IntersectionObserver(callback, options);
        observer.observe(currentElement);

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [ref, callback, options])
};

export default useIntersectionObserver;
