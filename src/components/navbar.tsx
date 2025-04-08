'use client';

import {useLenis} from 'lenis/react';
import {domAnimation, LazyMotion} from 'motion/react';
import * as m from 'motion/react-m';
import Link from 'next/link';
import {TbArrowRight, TbBrandInstagram} from 'react-icons/tb';
import {Button} from './ui/button';

export function Navbar() {
    const lenis = useLenis();

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
        </div>
    );
}
