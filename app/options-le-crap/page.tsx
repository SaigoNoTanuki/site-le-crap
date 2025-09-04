'use client';

import { openSans } from "../ui/homePageLeCrap/fonts";

export default function OptionsLeCrap (){
    return (
        <main className="flex items-center justify-center h-screen w-full">
            <div className="left-1/2">
                <h2 className={`${openSans} text-3xl text-center text-pink-800`}>As you might imagine from a crap page,</h2>
                <h2 className={`${openSans} text-3xl text-center text-pink-800`}> This wasn&apos;t actually worked on.</h2>
            </div>
        </main>
    );
}