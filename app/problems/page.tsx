import Image from "next/image";
import { ModeToggle } from "@/components/ui/theme-dropdown";

import { ProblemForm } from "@/components/custom/lc-form";

export default function Home() {
    return (
        <div
            className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div
                className="bg-cover bg-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 light:hidden ">
                <img src="https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg" alt=""
                     className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 light:hidden bg-cover"
                     width="1920"/>
            </div>
            <div
                className="bg-cover bg-center absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 dark:hidden ">
                <img src="https://play.tailwindcss.com/img/beams.jpg" alt=""
                     className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 dark:hidden"
                     width="1920"/>
            </div>
            <div
                className="absolute inset-0 bg-[url(./img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div
                className="relative px-6 pt-10 pb-8 w-2/5 h-full shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-10 block p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <div className="relative h-full">
                    <ProblemForm/>
                </div>
            </div>
        </div>
    )
        ;
}
