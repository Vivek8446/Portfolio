import React from 'react'

function Footer() {
    return (
        <div className=' bg-[#050816] text-white mt-20 md:mt-0'> <footer className="">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#home" className="flex items-center">
                            {/* <img src="" className="h-8 me-3" alt="Logo" /> */}
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vivek Kalpavruksha</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow me</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.linkedin.com/in/vivek-kalpavruksha/" className="hover:underline">
                                        LinkedIn
                                    </a>
                                </li>
                                <li className='mb-4'>
                                    <a href="https://github.com/Vivek8446/" className="hover:underline">GitHub</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="https://discordapp.com/users/879380154030362624" className="hover:underline">Discord</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="https://instagram.com/vivek_k_22_01" className="hover:underline">Instagram</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="https://x.com/vivekkalp" className="hover:underline">Twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Coding Profile</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.codechef.com/users/vivek_k098" className="hover:underline">CodeChef</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://leetcode.com/u/vivekkalp/" className="hover:underline">LeetCode</a>
                                </li>

                            </ul>
                        </div>


                    </div>
                </div>

            </div>
        </footer></div>
    )
}

export default Footer