import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import type { Person } from "../../types";

const CharacterPage = () => {
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState<Person | null>(null);

    useEffect(() => {
        if (!id) return;

        fetch(`https://hp-api.onrender.com/api/character/${id}`)
            .then((res) => res.json())
            .then((data: Person[]) => setData(data[0] ?? null))
            .catch(console.error);
    }, [id]);

    if (!data) return <div className="text-white p-8">Loading...</div>;

    return (
        <section
            className="relative min-h-screen bg-[url('/oneCharacter_bg.jpg')] bg-cover bg-center text-white flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 w-full max-w-5xl px-6">

                <motion.div
                    className="bg-[#1c1f2a]/90 rounded-2xl shadow-2xl overflow-hidden p-8 flex flex-col md:flex-row gap-8 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-center md:w-1/3">
                        <img
                            src={data.image || "/placeholder.jpg"}
                            alt={data.name}
                            className="w-full max-w-sm rounded-xl object-cover shadow-lg"
                        />
                    </div>

                    <div className="flex-1 flex flex-col gap-4">
                        <h1 className="text-4xl font-bold text-yellow-400">{data.name}</h1>

                        {data.alternate_names.length > 0 && (
                            <p className="text-gray-400 italic">Also known as: {data.alternate_names.join(", ")}</p>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
                            <p><strong>Species:</strong> {data.species}</p>
                            <p><strong>Gender:</strong> {data.gender}</p>
                            <p><strong>House:</strong> {data.house || "Unknown"}</p>
                            <p><strong>Date of Birth:</strong> {data.dateOfBirth || "Unknown"}</p>
                            <p><strong>Year of Birth:</strong> {data.yearOfBirth || "Unknown"}</p>
                            <p><strong>Wizard:</strong> {data.wizard ? "✔" : "✖"}</p>
                            <p><strong>Ancestry:</strong> {data.ancestry || "Unknown"}</p>
                            <p><strong>Eye Colour:</strong> {data.eyeColour || "Unknown"}</p>
                            <p><strong>Hair Colour:</strong> {data.hairColour || "Unknown"}</p>
                            <p><strong>Wand:</strong> {data.wand?.wood ? `${data.wand.wood}, ${data.wand.core}, ${data.wand.length ?? "?"}` : "Unknown"}</p>
                            <p><strong>Patronus:</strong> {data.patronus || "Unknown"}</p>
                            <p><strong>Hogwarts Student:</strong> {data.hogwartsStudent ? "✔" : "✖"}</p>
                            <p><strong>Hogwarts Staff:</strong> {data.hogwartsStaff ? "✔" : "✖"}</p>
                            <p><strong>Actor:</strong> {data.actor || "Unknown"}</p>
                            <p><strong>Alive:</strong> {data.alive ? "✔" : "✖"}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CharacterPage;
