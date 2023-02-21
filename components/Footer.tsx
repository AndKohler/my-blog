import MyLogo from '../public/MyLogo.jpg'
import Link from 'next/link';

const Footer = () => {
    return (
    <footer className='w-full'>
        <div className='flex flex-row justify-center dark:bg-gray-800 mt-10 py-8'>
            <ul className="flex flex-row mt-0 mr-6 space-x-4 text-xs md:text-lg">
                <li>
                <Link href="/" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:underline">Home</Link>
                </li>
                <li>
                <Link href="/more/about" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:underline">About</Link>
                </li>
                <li>
                <Link href="/more/workstation" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:underline">Workstation</Link>
                </li>
                <li>
                <Link href="/more/tools" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:underline">Tools</Link>
                </li>
                <li>
                <Link href="/more/collectables" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:underline">Collectables</Link>
                </li>
            </ul>
        </div>
    </footer>
    );
}
 
export default Footer;