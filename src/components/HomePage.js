import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const sounds = ['cxe', 'tch', 'khe'];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-8"> ORAL FEEDBACK </h1>

            {/* buttons for sound */}
            <div className="flex gap-4 flex-wrap justify-center">
                {sounds.map((sound) => (
                    <button key={sound}
                        onClick={() => navigate(`/analyze/${sound}`)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
                        {sound.toUpperCase()}
                    </button>
                ))}
            </div>
            {/* Optional footer or instructions */}
            <p className="mt-8 text-gray-600">
                Click a sound to start practicing your pronunciation.
            </p>
        </div>
    )
}
export default HomePage;