import MyLogo from '../public/MyLogo.jpg'
import Link from 'next/link';

const Footer = () => {
    return (
    <footer className='w-full'>
        <div className='dark:bg-gray-800'>
            <ul className="grid grid-cols-2 place-items-center py-10 md:flex md: flex-row md:justify-center space-x-4 md:text-xl">
                <li>
                <Link href="/" className="mt-1 px-2 py-1 text-white font-semibold rounded hover:underline">Home</Link>
                </li>
                <li>
                <Link href="/more/about" className="mt-1 px-2 py-1 text-white font-semibold rounded hover:underline">About</Link>
                </li>
                <li>
                <Link href="/more/collectables" className="mt-1 px-2 py-1 text-white font-semibold rounded hover:underline">Collectables</Link>
                </li>
                <li>
                <Link href="/more/workstation" className="mt-1 px-2 py-1 text-white font-semibold rounded hover:underline">Workstation</Link>
                </li>
                <li>
                <Link href="/more/tools" className="mt-1 px-2 py-1 text-white font-semibold rounded hover:underline">Tools</Link>
                </li>
                <li>
                <Link href="/more/projects" className="mt-1 px-2 py-1 text-white font-semibold rounded hover:underline">Upcoming Projects</Link>
                </li>
            </ul>
        </div>
    </footer>
    );
}
 
export default Footer;