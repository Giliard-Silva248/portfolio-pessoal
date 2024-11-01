import { useEffect, useState } from 'react';

export const Time: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 10000); // Atualiza a cada 10 segundos

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();

    return (
        <p>{hours} : {minutes}</p>
    );
};
