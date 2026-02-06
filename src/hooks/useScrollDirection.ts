import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export type ScrollDirection = 'up' | 'down';

export const useScrollDirection = () => {
    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('down');

    useMotionValueEvent(scrollY, 'change', (current) => {
        const previous = scrollY.getPrevious();
        if (previous !== undefined) {
            const diff = current - previous;
            setScrollDirection(diff > 0 ? 'down' : 'up');
        }
    });

    return scrollDirection;
};

export default useScrollDirection;
