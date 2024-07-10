import Link from "next/link";
import { menu } from "./menu.data";
import NavItem from "./NavItem";
import Image from "next/image";

const Navbar: React.FC = () => {
    return (
        <header className="border-b fixed w-full shadow-md bg-white z-50">
            <div className="flex items-center justify-between mx-auto max-w-2xl py-5 px-4 sm:px-6 lg:max-w-7xl ">
                <Link href="/">
                    <Image src='/carhartt-logo.png' alt='logo' width={180} height={180}/>
                </Link>
                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                {menu.map(item => (
                    <NavItem key={item.link} item={item} />
                ))}
            </nav>
            </div>
        </header>
    );
}

export default Navbar;
