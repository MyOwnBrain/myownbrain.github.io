import {type ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function ny(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function randomBetween(min: number, max: number) {
    return Math.random() * (max - min) + min;
}