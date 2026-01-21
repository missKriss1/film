import { useEffect, useState } from "react";
import { SPELLS_API } from "../../Api/api.ts";
import type { Spell } from "../../types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SpellBlock = () => {
    const [spells, setSpells] = useState<Spell[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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
        <section
            className="relative min-h-screen bg-[url('/spell_bg.jpg')] bg-cover bg-center text-white"
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col gap-12">

                <motion.h1
                    className="text-4xl font-bold text-white mb-2 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                     Magical Spells
                </motion.h1>

                <motion.p
                    className="text-gray-300 text-center max-w-3xl mx-auto mb-12 text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Discover the most powerful and enchanting spells taught at Hogwarts. Learn charms, curses, and incantations that every wizard should master!
                </motion.p>

                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    <div className="lg:w-1/3 flex justify-center">
                        <img
                            src="/spell_image.jpg"
                            alt="Magic Spells"
                            className="rounded-xl shadow-2xl object-cover w-[370px] max-w-md"
                        />
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 gap-6">
                        {spells.slice(0, 3).map((spell, index) => (
                            <motion.div
                                key={spell.id}
                                className="bg-[#1c1f2a] rounded-xl p-6 shadow-lg cursor-pointer group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,0,0.5)" }}
                            >
                                <h2 className="font-bold text-xl mb-2 text-yellow-300 group-hover:text-yellow-400">
                                    {spell.name}
                                </h2>
                                <p className="text-gray-300 text-sm">{spell.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <motion.button
                        onClick={() => navigate("/spells")}
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
                        View More Spells
                    </motion.button>
                </div>


            </div>
        </section>
    );
};

export default SpellBlock;
