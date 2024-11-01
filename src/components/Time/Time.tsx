import { useEffect, useState } from 'react';
import * as S from './style'
const formatTimeUnit = (unit: number) => unit.toString().padStart(2, '0');

export const Time: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 10000); 

        return () => clearInterval(interval);
    }, []);

    const hours = formatTimeUnit(time.getHours());
    const minutes = formatTimeUnit(time.getMinutes());

    return (
        <S.clock>
            <p>{hours}:{minutes}</p>
        </S.clock>
    );
};
