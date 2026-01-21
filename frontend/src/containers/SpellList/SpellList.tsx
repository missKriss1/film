import { useEffect, useState } from "react";
import { SPELLS_API } from "../../Api/api.ts";
import type { Spell } from "../../types";
import { motion } from "framer-motion";

const SpellList = () => {
    const [spells, setSpells] = useState<Spell[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(SPELLS_API)
            .then((res) => res.json())
            .then((data: Spell[]) => setSpells(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className="text-white p-4">Loading spells...</div>;
    if (spells.length === 0) return <div className="text-white p-4">No spells found.</div>;

    return (
        <section className="relative min-h-screen bg-[url('/magic_bg.jpg')] bg-cover bg-center text-white">
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col gap-12">

                <motion.h1
                    className="text-5xl font-bold text-yellow-400 text-center mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    📜 Magical Spells
                </motion.h1>

                <motion.p
                    className="text-gray-300 text-center max-w-3xl mx-auto mb-12 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Explore the enchanting world of Hogwarts magic. Each spell is a key to unlocking incredible abilities, from charming objects to protecting against dark forces. Whether you are a budding wizard or a seasoned sorcerer, these incantations will ignite your magical journey.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {spells.map((spell) => (
                        <motion.div
                            key={spell.id}
                            className="bg-[#1c1f2a] rounded-xl p-6 shadow-lg cursor-pointer group hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5}}
                        >
                            <h2 className="font-bold text-xl mb-2 text-yellow-300 group-hover:text-yellow-400">
                                {spell.name}
                            </h2>
                            <p className="text-gray-300 text-sm">{spell.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Кнопка для просмотра еще */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="px-10 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 hover:shadow-xl transition"
                    >
                        Back to Top
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SpellList;
