import { motion } from "framer-motion";

const HistoryPage = () => {
    return (
        <div className="w-full bg-gray-900 text-white">
            <section
                className="relative w-screen h-[30vh] bg-[url('/bg_history.jpg')] bg-cover bg-center flex items-center justify-center"
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <motion.h1
                    className="relative z-10 text-5xl md:text-6xl font-bold text-center px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    The History of Hogwarts
                </motion.h1>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                <div className="flex flex-col gap-8">
                    {[
                        {
                            title: "The Founding",
                            text: "Hogwarts School of Witchcraft and Wizardry was founded over a thousand years ago by four great wizards: Godric Gryffindor, Salazar Slytherin, Helga Hufflepuff, and Rowena Ravenclaw. Each founder wanted to pass on their knowledge, values, and magical skills to the next generations."
                        },
                        {
                            title: "The Houses",
                            text: "The school is divided into four houses named after the founders. Each house nurtures unique qualities in students: bravery, cunning, loyalty, and wisdom. Houses compete for the House Cup every year, fostering friendship, teamwork, and healthy rivalry."
                        },
                        {
                            title: "Legends and Secrets",
                            text: "Hogwarts holds countless secrets and magical artifacts, hidden chambers, and enchanted staircases. Over the centuries, many legendary events have taken place here, from duels between powerful wizards to the discovery of mystical objects that changed the wizarding world forever."
                        },
                        {
                            title: "A School Like No Other",
                            text: "Hogwarts is more than just a school; it is a symbol of magic, courage, and friendship. It continues to inspire generations of witches and wizards, teaching them not only spells and potions, but also the values of bravery, loyalty, and wisdom."
                        }
                    ].map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
                            <p className="text-gray-300">{section.text}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="flex justify-center md:justify-end"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="/history_PG.jpg"
                        alt="Hogwarts Castle"
                        className="w-full max-w-md rounded-xl shadow-2xl"
                    />
                </motion.div>

            </section>

            <motion.section
                className="relative bg-black/70 py-16 px-6 text-center overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-yellow-400 rounded-full w-1 h-1"
                        initial={{ opacity: 0, y: -50, x: Math.random() * window.innerWidth }}
                        animate={{ opacity: 1, y: [0, 100, 0], x: Math.random() * window.innerWidth }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 4 + Math.random() * 3,
                            delay: Math.random() * 2
                        }}
                    />
                ))}

                <h2 className="relative z-10 text-4xl font-bold mb-4">Apply to Hogwarts</h2>
                <p className="relative z-10 text-gray-300 max-w-2xl mx-auto mb-8">
                    Submit your application to join the legendary Hogwarts School of Witchcraft and Wizardry. Fill out the form below and start your magical journey.
                </p>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
                    <form className="flex-1 flex flex-col gap-4 w-full">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <select
                            className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        >
                            <option>Select Your House</option>
                            <option>Gryffindor</option>
                            <option>Slytherin</option>
                            <option>Hufflepuff</option>
                            <option>Ravenclaw</option>
                        </select>
                        <textarea
                            placeholder="Why do you want to join Hogwarts?"
                            rows={4}
                            className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        ></textarea>

                        <button
                            type="submit"
                            className="mt-4 px-10 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 hover:shadow-xl transition"
                        >
                            Submit Application
                        </button>
                    </form>

                </div>
            </motion.section>


        </div>
    );
};

export default HistoryPage;
