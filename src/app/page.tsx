'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';
import GradualSpacing from '@/components/ui/gradual-spacing';
import {TbCode, TbDeviceGamepad2, TbExternalLink, TbMusic} from 'react-icons/tb';
import ReactLenis from 'lenis/react';
import HobbyPanel from '@/components/hobby-panel';

const MotionImage = motion.create(Image);

export default function Home() {
    return (
        <ReactLenis root>
            <motion.header
                className='h-screen flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8'
                initial={{opacity: 0, filter: 'blur(1rem)'}}
                animate={{opacity: 1, filter: 'blur(0)'}}
                transition={{duration: 1}}
            >
                <div style={{perspective: '1000px'}} className='relative z-10'>
                    <MotionImage
                        src='/myownbrain.svg'
                        alt='MyOwnBrain Logo'
                        width={320}
                        height={320}
                        className='border rounded-[4rem] w-64 lg:w-80'
                        initial={{rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1, y: 0, boxShadow: '0 0.5rem 2rem #040404A0'}}
                        whileHover={{rotateX: 10, rotateY: 10, rotateZ: -10, scale: 1.2, y: 32, boxShadow: '0 1rem 4rem #04040480'}}
                        transition={{ease: 'easeInOut', duration: 0.4}}
                    />
                </div>
                <h1 className='flex flex-col justify-center items-center lg:items-start gap-4'>
                    <div className='drop-shadow-[0_0_4rem_#FAFAFA] *:justify-start'>
                        <GradualSpacing text='MyOwnBrain' className='text-5xl md:text-7xl lg:text-8xl font-bold -tracking-wider' />
                    </div>
                    <div className='flex flex-col text-3xl md:text-5xl lg:text-6xl font-medium *:justify-start'>
                        <GradualSpacing text='Musician & Developer' className='-tracking-widest' />
                        <GradualSpacing text='trapped in one Person' className='-tracking-widest' />
                    </div>
                </h1>
            </motion.header>
            <main className='w-full *:h-screen *:w-full'>
                <section className='flex flex-col justify-center items-center gap-8 lg:gap-24'>
                    <h2 className='flex items-center gap-3 font-semibold text-2xl leading-none'>
                        <div className='size-3 bg-neutral-50 shadow-[0_0_1rem_#FAFAFA,_0_0_2rem_#FAFAFA] rounded-full' />
                        Hobbies
                    </h2>
                    <div style={{perspective: '1000px'}} className='flex flex-wrap justify-center gap-4 lg:gap-8 xl:gap-16 h-max w-full'>
                        <HobbyPanel Icon={TbDeviceGamepad2} title='Gaming'>
                            <li>Minecraft</li>
                            <li>Delta Force</li>
                            <li>Rocket League</li>
                            <li>Euro Truck Simulator 2</li>
                            <li>Trackmania 2020</li>
                        </HobbyPanel>
                        <HobbyPanel Icon={TbMusic} title='Music'>
                            <li>playing Piano, Organ</li>
                            <li>producing my own tracks</li>
                        </HobbyPanel>
                        <HobbyPanel Icon={TbCode} title='Coding'>
                            <li>WebDev</li>
                            <li>mainly Next.js projects</li>
                            <li>
                                one Minecraft Java Mod named{' '}
                                <a
                                    href='https://modrinth.com/mod/auto-logout'
                                    target='_blank'
                                    className='underline underline-offset-4 font-semibold inline-flex items-center gap-1 hover:drop-shadow-[0_0_0.75rem_#FAFAFA] transition'
                                >
                                    Auto Logout
                                    <TbExternalLink className='align-middle' />
                                </a>
                            </li>
                            <li>also know some Python</li>
                        </HobbyPanel>
                    </div>
                </section>
            </main>
        </ReactLenis>
    );
}
