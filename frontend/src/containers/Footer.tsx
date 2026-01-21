import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer
            className="relative   bg-cover bg-center text-white mt-16"
        >
            <div className="absolute inset-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-8">

                <NavLink to="/">
                    <motion.img
                        src="/logoH.png"
                        alt="Logo"
                        className="w-32"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    />
                </NavLink>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4">Hogwarts</h2>
                    <p className="text-gray-300 max-w-xs">
                        Welcome to Hogwarts School of Witchcraft and Wizardry. Explore magical lessons, meet talented students, and discover the wonders of wizardry.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-xl font-bold text-yellow-400 mb-4">Follow us</h2>
                    <div className="flex gap-4 text-2xl">
                        <a href="#" className="hover:text-yellow-400 transition">
                            <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition">
                            <FaTwitter />
                        </a>
                    </div>
                </motion.div>

                {/* Контакты */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-xl font-bold text-yellow-400 mb-4">Contact</h2>
                    <p className="text-gray-300">Email: info@hogwarts.edu</p>
                    <p className="text-gray-300">Phone: +44 123 456 789</p>
                </motion.div>
            </div>

            <div className="relative z-10 text-center border-t border-gray-700 mt-8 py-4 text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Hogwarts School of Witchcraft and Wizardry. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;
