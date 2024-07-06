export default function Explore() {
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
                className="relative pl-12 pr-12 pt-6 items-center w-5/6 h-full shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg block bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <div >
                    <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white"> What
                        do we offer
                        ?
                    </h2>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                        FreeBoard is your comprehensive solution for note-taking and solving LeetCode
                        problems.<br/> Here’s what we bring to the table:
                    </p><br/>
                    <div
                        className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3 bg-white dark:bg-gray-800">
                        <figure
                            className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Free access to
                                    whiteboard features</h3>
                                <p className="my-4">Enjoy unlimited use of our whiteboard features without any cost. No
                                    hidden fees or subscriptions.</p>
                            </blockquote>
                        </figure>
                        <figure
                            className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Intuitive
                                    Whiteboard</h3>
                                <p className="my-4">A clean and user-friendly interface designed to help you take notes,
                                    sketch diagrams, and brainstorm ideas effortlessly.</p>
                            </blockquote>
                        </figure>
                        <figure
                            className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Multi-Device
                                    Support</h3>
                                <p className="my-4">Access your whiteboards from any device, whether you’re on a
                                    desktop, tablet, or smartphone. Your notes and progress are always within reach.</p>
                            </blockquote>
                        </figure>
                        <figure
                            className="flex flex-col items-center justify-center p-8 text-center bg-white border-r border-gray-200 rounded-bl-lg dark:bg-gray-800 dark:border-gray-700">
                            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Enhanced
                                    Productivity</h3>
                                <p className="my-4">With features like undo/redo, zoom, and customizable backgrounds,
                                    FreeBoard is designed to enhance your productivity and streamline your workflow.</p>
                            </blockquote>
                        </figure>
                        <figure
                            className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
                            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Advanced
                                    Toolset</h3>
                                <p className="my-4">Utilize a variety of tools including text, drawing, shapes, and code
                                    snippets. Customize your workspace to fit your needs, from detailed notes to complex
                                    problem-solving.</p>
                            </blockquote>
                        </figure>
                        <figure
                            className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Easy going UI</h3>
                                <p className="my-4">Experience the perfect blend of functionality and ease-of-use with
                                    FreeBoard, and take your note-taking and coding practice to new heights!</p>
                            </blockquote>
                        </figure>
                    </div>
                </div>


            </div>
        </div>


    );
}
