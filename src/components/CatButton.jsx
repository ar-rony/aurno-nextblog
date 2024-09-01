import Link from 'next/link';
 
const CatButton = ({url, text}) => {
  return (
    <Link className='px-6 py-2 text-light ring-2 ring-light rounded-full bg-dark w-max hover:scale-105 transition-all ease duration-100' href={url}>{text}</Link>
  )
}

export default CatButton