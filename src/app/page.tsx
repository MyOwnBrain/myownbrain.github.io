'use client';

import HobbyPanel from '@/components/hobby-panel';
import SocialPanel from '@/components/social-panel';
import GradualSpacing from '@/components/ui/gradual-spacing';
import {domAnimation, LazyMotion} from 'motion/react';
import * as m from 'motion/react-m';
import ReactLenis from 'lenis/react';
import Image from 'next/image';
import {TbBrandGithub, TbBrandInstagram, TbBrandTiktok, TbBrandTwitch, TbCode, TbDeviceGamepad2, TbExternalLink, TbMusic} from 'react-icons/tb';

const MotionImage = m.create(Image);

export default function Home() {
    return (
        <ReactLenis root>
            <LazyMotion features={domAnimation}>
                <m.header
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
                </m.header>
            </LazyMotion>
            <main className='w-full *:h-screen *:w-full'>
                <section className='flex flex-col justify-center items-center gap-8 lg:gap-24' id='hobbies'>
                    <h2 className='flex items-center gap-3 font-semibold text-2xl leading-none'>
                        <div className='size-3 bg-neutral-50 shadow-[0_0_1rem_#FAFAFA,_0_0_2rem_#FAFAFA] rounded-full' />
                        Hobbies
                    </h2>
                    <div className='flex flex-wrap justify-center gap-4 lg:gap-8 xl:gap-16 h-max w-full'>
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
                <section className='flex flex-col justify-center items-center gap-8 lg:gap-24' id='socials'>
                    <h2 className='flex items-center gap-3 font-semibold text-2xl leading-none'>
                        <div className='size-3 bg-neutral-50 shadow-[0_0_1rem_#FAFAFA,_0_0_2rem_#FAFAFA] rounded-full' />
                        Socials
                    </h2>
                    <div className='flex flex-wrap justify-center gap-4 lg:gap-8 2xl:gap-16 h-max w-full'>
                        <SocialPanel
                            Icon={TbBrandInstagram}
                            title='Instagram'
                            username='piano.niklas'
                            url='https://www.instagram.com/piano.niklas/'
                            description='music & photographie'
                            background='linear-gradient(to top right, #FFC933, #FF335F, #9D4EDD), radial-gradient(circle at top right, #FF0037 0%, #FF003700 80%)'
                        />
                        <SocialPanel
                            Icon={TbBrandTiktok}
                            title='TikTok'
                            username='myownbrain37'
                            url='https://www.tiktok.com/@myownbrain37'
                            description='music & coding'
                            background='radial-gradient(circle at top left, #22D3EE 0%, #22D3EE00 80%), radial-gradient(circle at top right, #FF0037 0%, #FF003700 80%)'
                        />
                        <SocialPanel
                            Icon={TbBrandTwitch}
                            title='Twitch'
                            username='myownbrain'
                            url='https://www.twitch.tv/myownbrain'
                            description='occasionally streaming'
                            background='radial-gradient(circle at center, #F970ff, #9D4EDDD0)'
                        />
                        <SocialPanel
                            Icon={TbBrandGithub}
                            title='GitHub'
                            username='myownbrain'
                            url='https://github.com/MyOwnBrain'
                            description='my coding stuff'
                            background='radial-gradient(circle at center, #FAFAFA, #404040)'
                        />
                    </div>
                </section>
            </main>
        </ReactLenis>
    );
}
