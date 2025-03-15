'use client';

import Link from 'next/link';
import {TbArrowRight, TbBrandInstagram} from 'react-icons/tb';
import {domAnimation, LazyMotion} from 'motion/react';
import * as m from 'motion/react-m';
import {randomBetween} from '@/lib/utils';
import {useEffect, useState} from 'react';
import {Button} from './ui/button';
import {useLenis} from 'lenis/react';

interface Snowflake {
    id: number;
    animationName: string;
    animationDuration: string;
    animationDelay: string;
    left: string;
    fontSize: string;
}

export function Navbar() {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
    const lenis = useLenis();

    useEffect(() => {
        const generateSnowflakes = (): Snowflake[] =>
            Array.from({length: 50}, (_, i) => ({
                id: i,
                animationName: `snow_fall_${Math.round(randomBetween(0, 3))}`,
                animationDuration: `${randomBetween(2, 6)}s`,
                animationDelay: `${randomBetween(0, 8)}s`,
                left: `${randomBetween(0, 100)}%`,
                top: '-20px',
                fontSize: `${Math.round(randomBetween(12, 20))}px`,
            }));
        setSnowflakes(generateSnowflakes());
    }, []);

    return (
        <div className='w-full py-8 flex justify-center bg-linear-to-b from-[#040404]/60 to-transparent fixed top-0 z-50'>
            <LazyMotion features={domAnimation}>
                <m.div
                    className='flex justify-between p-2 px-4 border rounded-full max-w-5xl w-[90%] shadow-[0_0.5rem_2rem_#040404A0] bg-neutral-500/10 backdrop-blur-xl'
                    initial={{opacity: 0, y: -48, filter: 'blur(1rem)'}}
                    animate={{opacity: 1, y: 0, filter: 'blur(0)'}}
                    transition={{duration: 0.5}}
                >
                    <div className='flex gap-2 items-center'>
                        <Button
                            variant='ghost'
                            onClick={() => lenis?.scrollTo('#hobbies')}
                            className='group flex items-center gap-1 w-max font-medium text-lg hover:bg-neutral-500/10 leading-none px-3 py-2 rounded-xl transition cursor-pointer'
                        >
                            <span className='group-hover:drop-shadow-[0_0_0.75rem_#FAFAFA]'>Hobbies</span>
                        </Button>
                        <Button
                            variant='ghost'
                            onClick={() => lenis?.scrollTo('#socials')}
                            className='group flex items-center gap-1 w-max font-medium text-lg hover:bg-neutral-500/10 leading-none px-3 py-2 rounded-xl transition cursor-pointer'
                        >
                            <span className='group-hover:drop-shadow-[0_0_0.75rem_#FAFAFA]'>Socials</span>
                        </Button>
                    </div>
                    <div className='flex items-center gap-2 justify-center rounded-full'>
                        <span className='inline-flex items-center gap-1'>
                            Contact
                            <TbArrowRight />
                        </span>
                        <Link
                            href='https://www.instagram.com/piano.niklas/'
                            target='_blank'
                            className='group p-0.5 rounded-xl hover:bg-neutral-500/10 hover:shadow-[0_0.25rem_1rem_#04040404] transition'
                            aria-label='Instagram'
                        >
                            <TbBrandInstagram className='size-8 group-hover:drop-shadow-[0_0_0.75rem_#FAFAFA] transition' />
                        </Link>
                    </div>
                </m.div>
            </LazyMotion>
            <div className='absolute w-full h-full top-0 -z-10'>
                {snowflakes.map(({id, ...style}) => {
                    return (
                        <div key={id} style={style} className='absolute text-neutral-50 repeat-infinite ease-linear'>
                            *
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
