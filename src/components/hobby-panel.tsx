import {ReactNode} from 'react';
import {IconType} from 'react-icons';
import {motion} from 'framer-motion';

export default function HobbyPanel({Icon, title, children}: {Icon: IconType; title: string; children: ReactNode}) {
    return (
        <motion.div
            className='relative flex sm:flex-col p-4 lg:p-6 xl:p-8 gap-4 rounded-[2rem] border sm:max-w-64 lg:max-w-72 xl:max-w-80 w-full mx-4 sm:mx-0 bg-neutral-950'
            initial={{opacity: 0, filter: 'blur(2rem)'}}
            whileInView={{opacity: 1, filter: 'blur(0rem)'}}
            transition={{duration: 1}}
        >
            <div
                className='w-full max-w-32 sm:max-w-none sm:aspect-[2/1] flex flex-col justify-center items-center rounded-xl shadow-[0_0.5rem_2rem_#040404A0]'
                style={{
                    background: 'radial-gradient(circle at 50% 25%, #404040, #040404)',
                }}
            >
                <Icon className='size-16 mix-blend-overlay' />
            </div>
            <div className='mx-1 lg:mx-4'>
                <h2 className='font-bold uppercase text-xl tracking-widest'>{title}</h2>
                <ul className='list-["•"] ml-2 *:pl-2'>{children}</ul>
            </div>
            <div className='pointer-events-none w-4/5 sm:w-40 lg:w-48 xl:w-56 h-[1px] absolute left-1/2 -translate-x-1/2 -bottom-[1px] bg-neutral-50 shadow-[0_0_1rem_#FAFAFA,_0_0_2rem_#FAFAFA]' />
            <div className='pointer-events-none w-4/5 sm:w-40 lg:w-48 xl:w-56 h-1 absolute left-1/2 -translate-x-1/2 -bottom-[2px] bg-neutral-50 blur-lg' />
        </motion.div>
    );
}
