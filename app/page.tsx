import Image from "next/image";
import { ModeToggle } from "@/components/ui/theme-dropdown";

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
              className="relative grid grid-cols-2 flex flex-col items-center w-5/6 h-full shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg block bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <div className="pr-12"><img style={{width: 1200, height: 400}}
                                          className="object-cover rounded-t-lg md:w-48 md:rounded-none md:rounded-s-lg"
                                          src="homepage.png"/>
              </div>
              <div>
                  <h1 className="mb-4 inline-flex text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Whiteboard </span>
                  </h1>
                  <span className="text-4xl font-extrabold dark:text-white"> for LeetCode.</span>
                  <br/>

                  <div><p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                      Your Ultimate Whiteboard for Notes and LeetCode Mastery!<br/><br/>
                      Are you looking for a versatile and intuitive whiteboard to boost your productivity and
                      enhance your coding skills?<br/> FreeBoard is here to transform your note-taking and
                      problem-solving experience. Whether you're preparing for coding interviews or
                      brainstorming
                      ideas, FreeBoard provides the perfect canvas for all your needs.</p>
                  </div>
              </div>
          </div>
          <br/><br/>
          <div
              className="relative pl-12 pr-12 pt-6 grid grid-cols-5 items-center w-5/6 h-full shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg block bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <div className="col-span-2">
                  <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white"> <span
                      className="underline underline-offset-2 decoration-7 decoration-blue-400 dark:decoration-blue-600 md:text-4xl lg:text-5xl">Why choose</span> FreeBoard
                      ?
                  </h2>
                  <ul role="list" className="space-y-5 my-7">
                      <li className="flex items-center">
                          <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          <span
                              className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">100% Free</span>
                      </li>
                      <li className="flex">
                          <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          <span
                              className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">User-Friendly Interface</span>
                      </li>
                      <li className="flex">
                          <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          <span
                              className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Excalidraw-inspired Whiteboard</span>
                      </li>
                      <li className="flex">
                          <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          <span
                              className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Rich Toolset</span>
                      </li>
                      <li className="flex">
                          <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          <span
                              className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Cross-platform Access</span>
                      </li>

                  </ul>
              </div>
              <div
                  className="max-w-sm p-6 mr-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Problem
                      ID</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Use the LeetCode Problem ID to easily
                      access the problem specific whiteboard</p>
              </div>
              <div
                  className="max-w-sm p-6 mr-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Extensive Whiteboard</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Use the extensive Excalidraw-inspired Whiteboard featuring handwriting fonts and brilliant tools for a wonderful user experience</p>
              </div>
              <div
                  className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Persistence<span
                      className="bg-blue-100 text-blue-800 text-xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">NEW</span>
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Now, your whiteboard will be
                      automatically saved and restored from the last scene everytime you come back to the same problem</p>
              </div>
          </div>
      </div>


  );
}
