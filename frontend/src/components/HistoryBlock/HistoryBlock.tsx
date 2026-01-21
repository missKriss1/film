import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HistoryBlock = () => {
    const navigate = useNavigate();

    return (

        <section
            className="
        relative
        w-full
        aspect-[16/9]
        bg-[url('/main-bg.jpg')]
        bg-cover
        bg-center
        text-white
        py-24
      "
        >

            <div className="absolute inset-0 bg-black/60"></div>
            {[...Array(25)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-yellow-400 rounded-full w-1 h-1 mt-[-75px]"
                    initial={{ opacity: 0, x: Math.random() * window.innerWidth, y: Math.random() * 400 }}
                    animate={{ opacity: [0, 1, 0], y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, repeatType: "loop", duration: 2 + Math.random() * 2, delay: Math.random() * 2 }}
                />
            ))}

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Левая часть — изображение с анимацией */}
                <motion.div
                    className="flex justify-center md:justify-start"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="/aboutBG.jpg"
                        alt="Hogwarts"
                        className="w-full max-w-md rounded-xl shadow-2xl"
                    />
                </motion.div>

                {/* Правая часть — текст */}
                <motion.div
                    className="flex flex-col justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <motion.h2
                        className="text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Hogwarts School of Witchcraft and Wizardry
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-200 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Hogwarts is a legendary school of magic where children from all over the world learn spells, potions, and the defense against dark arts. Founded by great wizards over a thousand years ago, the school holds ancient secrets and mystical artifacts.
                    </motion.p>

                    <motion.p
                        className="text-lg text-gray-200 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        It is a place where friendship, courage, and true magic are born, inspiring generations.
                    </motion.p>

                    <motion.button
                        onClick={() => navigate('/history_hogwarts')}
                        className="
              w-fit
              px-16
              py-3
              bg-yellow-400
              text-black
              font-semibold
              rounded-lg
              shadow-lg
            "
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(255, 255, 0, 0.6)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Learn More
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
};

export default HistoryBlock;
