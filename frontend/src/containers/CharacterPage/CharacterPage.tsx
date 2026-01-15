import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Person } from "../../types";

const CharacterPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
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
        <div className="min-h-screen bg-[#0f1117] text-white p-8">
            <button
                onClick={() => navigate(-1)}
                className="mb-8 text-sm underline"
            >
                ← Back
            </button>

            <div className="max-w-5xl mx-auto bg-[#1c1f2a] rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="flex justify-center">
                        <img
                            src={data.image || "/placeholder.jpg"}
                            alt={data.name}
                            className="w-full max-w-sm rounded-lg object-cover"
                        />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold mb-4">{data.name}</h1>

                        {data.alternate_names.length > 0 && (
                            <p className="text-sm text-gray-400 mb-4">
                                Also known as: {data.alternate_names.join(", ")}
                            </p>
                        )}

                        <div className="space-y-2 text-sm">
                            <p><strong>Species:</strong> {data.species}</p>
                            <p><strong>Gender:</strong> {data.gender}</p>
                            <p><strong>House:</strong> {data.house || "Unknown"}</p>
                            <p><strong>Date of Birth:</strong> {data.dateOfBirth || "Unknown"}</p>
                            <p><strong>Year of Birth:</strong> {data.yearOfBirth || "Unknown"}</p>
                            <p><strong>Wizard:</strong> {data.wizard ? "Yes" : "No"}</p>
                            <p><strong>Ancestry:</strong> {data.ancestry || "Unknown"}</p>
                            <p><strong>Eye Colour:</strong> {data.eyeColour}</p>
                            <p><strong>Hair Colour:</strong> {data.hairColour}</p>
                            <p>
                                <strong>Wand:</strong>{" "}
                                {data.wand?.wood
                                    ? `${data.wand.wood}, ${data.wand.core}, ${data.wand.length ?? "?"}"`
                                    : "Unknown"}
                            </p>
                            <p><strong>Patronus:</strong> {data.patronus || "Unknown"}</p>
                            <p><strong>Hogwarts Student:</strong> {data.hogwartsStudent ? "✔" : "✖"}</p>
                            <p><strong>Hogwarts Staff:</strong> {data.hogwartsStaff ? "✔" : "✖"}</p>
                            <p><strong>Actor:</strong> {data.actor}</p>
                            <p><strong>Alive:</strong> {data.alive ? "✔" : "✖"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterPage;
