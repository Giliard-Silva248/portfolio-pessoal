import React, { useRef, useState } from 'react';
import useIntersectionObserver from '../../util/useIntersectionObserver';

interface Config{
    children: any
}


const FadeInSection: React.FC<Config> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useIntersectionObserver(ref, (entries) => {
        if (entries[0].isIntersecting) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    return (
        <div
            ref={ref}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
