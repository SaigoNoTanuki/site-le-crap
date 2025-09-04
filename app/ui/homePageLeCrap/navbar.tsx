'useClient';
import Link from "next/link";
import { openSans } from "./fonts"

const  Navbar = function(){
    return (
        <div className="fixed flex items-center justify-between bg-gray-950 w-full h-14 p-4 shadow-md">
            <p className={`${openSans} antialiased text-lg text-pink-700`}>
                <Link href={"/"}>Home le Crap</Link>
            </p>
            <p className={`${openSans} antialiased text-lg text-pink-600`}>Site le Crap</p>
            <p className={`${openSans} antialiased text-lg text-pink-700`}>
            <Link href={"/options-le-crap"}>Options le Crap</Link>
            </p>
        </div>
    )
}

export default Navbar