import { cn } from '@/lib/utils'
import Link from 'next/link'
import { slug } from 'github-slugger'

interface TagProps{
  name: string;
  link?: boolean;
  className?: string;
}

const Tag = ({ name, link, ...props } : TagProps) => {
  return (
    <Link href={`/categories/${slug(name)}`} className={cn(props.className)}>{name}</Link>
  )
}

export default Tag