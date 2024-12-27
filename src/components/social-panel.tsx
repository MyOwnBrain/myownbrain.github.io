import {motion} from 'framer-motion';
import {IconType} from 'react-icons';

export default function SocialPanel({
    Icon,
    title,
    username,
    url,
    description,
    background,
}: {
    Icon: IconType;
    title: string;
    username: string;
    url: string;
    description: string;
    background: string;
}) {
    return (
        <motion.a
            href={url}
            className='relative flex sm:flex-col p-4 lg:p-6 xl:p-8 gap-4 rounded-[2rem] border sm:max-w-64 xl:max-w-72 w-full mx-4 sm:mx-0 bg-neutral-950'
            initial={{opacity: 0, filter: 'blur(2rem)'}}
            whileInView={{opacity: 1, filter: 'blur(0rem)'}}
            transition={{scale: {duration: 0.2}, opacity: {duration: 1}, filter: {duration: 1}, ease: 'easeInOut'}}
            whileHover={{scale: 1.05}}
        >
            <div
                className='glow-effect relative w-full max-w-32 sm:max-w-none sm:aspect-[2/1] flex flex-col justify-center items-center rounded-xl'
                style={{
                    background: background,
                }}
            >
                <Icon className='size-12 sm:size-16 mix-blend-overlay stroke-neutral-50' />
            </div>
            <div className='mx-1 lg:mx-4 flex flex-col gap-2 sm:items-center'>
                <h2 className='font-bold lowercase text-2xl leading-none sm:text-center'>{title}</h2>
                <h3 className='font-bold lowercase leading-none sm:text-center'>@{username}</h3>
                <p className='font-semibold text-neutral-500 leading-none sm:text-center'>{description}</p>
            </div>
        </motion.a>
    );
}
