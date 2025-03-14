'use client';

import {domAnimation, LazyMotion, AnimatePresence, Variants} from 'motion/react';
import * as m from 'motion/react-m';
import {ny} from '@/lib/utils';

interface GradualSpacingProps {
    text: string;
    duration?: number;
    delayMultiple?: number;
    framerProps?: Variants;
    className?: string;
}

export default function GradualSpacing({
    text,
    duration = 0.5,
    delayMultiple = 0.04,
    framerProps = {
        hidden: {opacity: 0, x: -20},
        visible: {opacity: 1, x: 0},
    },
    className,
}: GradualSpacingProps) {
    return (
        <div className='flex justify-center space-x-1'>
            <LazyMotion features={domAnimation}>
                <AnimatePresence>
                    {text.split('').map((char, i) => (
                        <m.h1
                            key={i}
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                            variants={framerProps}
                            transition={{duration, delay: i * delayMultiple}}
                            className={ny('drop-shadow-xs ', className)}
                        >
                            {char === ' ' ? <span>&nbsp;</span> : char}
                        </m.h1>
                    ))}
                </AnimatePresence>
            </LazyMotion>
        </div>
    );
}
