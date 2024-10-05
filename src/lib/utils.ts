import { Post }  from "#site/content"
import { type ClassValue, clsx } from "clsx";
import { compareDesc, parseISO } from "date-fns";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export function sortPosts(blogs: Array<Post>){
    return blogs.sort( (a,b) => {
        if(a.publishedAt>b.publishedAt) return -1;
        if(a.publishedAt<b.publishedAt) return 1;
        return 0;
    })
}