'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default async function Page() {
    return (
        <div className="flex flex-col md:flex-row justify-between min-h-screen mx-0 px-4 py-4 bg-white dark:bg-black text-gray-900 dark:text-white">
            {/* Left Side: Text Content */}
            <div className="flex flex-col justify-start items-start gap-6 w-full md:w-[464px] order-1 md:order-1">
                <h1 className="text-4xl font-bold">
                    I’m Jefferson. 
                    <p>I live in Salt Lake City, where I develop the future.</p>
                </h1>
                {Array.from({ length: 1 }, (_, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-400 text-sm leading-6">
                        Bachelor's degree holder in the top 10% of the Administration and International Business program from Universidad Privada del Norte. Known for strong analytical skills, leadership, and teamwork abilities, alongside a high capacity to perform under pressure. Responsible, organized, and grounded in a solid ethical foundation. Currently pursuing an associate degree in IT at Ensign College, with a keen interest in expanding knowledge and tackling new challenges. Highly skilled in programming with Java and proficient in JavaScript.
                    </p>

                ))}
            </div>

            {/* Right Side: Image and Social Media Links */}
            <div className="flex flex-col gap-6 w-full md:w-[464px] order-2 md:order-2">
                {/* Image at the top in mobile view */}
                <img
                    className="w-full h-[452px] object-cover rounded-lg"
                    src="/MyPhoto.png"
                    alt="About Image"
                />

                {/* Social Media Links */}
                <div className="flex flex-col gap-6">
                    {/* Follow me on Section with Clickable Icons */}
                    <div className="flex flex-col gap-2">
                        <a href="https://twitter.com/jane" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faXTwitter} className="text-gray-900 dark:text-white w-5 h-5" />
                            <span className="text-gray-900 dark:text-white text-sm">Follow me on X</span>
                        </a>
                        <a href="https://github.com/jga863" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faGithub} className="text-gray-900 dark:text-white w-5 h-5" />
                            <span className="text-gray-900 dark:text-white text-sm">Follow me on GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/jefferson-asencio-rios/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faLinkedin} className="text-gray-900 dark:text-white w-5 h-5" />
                            <span className="text-gray-900 dark:text-white text-sm">Follow me on LinkedIn</span>
                        </a>
                    </div>

                    {/* Email Section */}
                    <div className="flex items-center border-t border-gray-700 pt-4">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray-900 dark:text-white w-5 h-5" />
                        <span className="ml-2 text-gray-900 dark:text-white text-sm">asencioriosj@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
