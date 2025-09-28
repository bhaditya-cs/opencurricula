"use client"
import React, { useState } from 'react';

type Props = {
  select_lesson_idx: (_: number) => void;
}
export default function ShowLessons({ select_lesson_idx} : Props) {

    const [elements, setElements] = useState([]);

    const handleClick = () => {
        setElements(prev => [...prev, `Element ${prev.length + 1}`]);
    };
    return (<div className="flex flex-col gap-4">
        <div className="flex flex-row gap-10 justify-center">
            <h2 className="text-3xl font-semibold">View all lessons</h2>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-md font-semibold max-w-sm" onClick={handleClick}>
                + Create New Lesson
            </button>
            <button className="bg-transparent border border-gray-500 text-gray-500 px-6 py-3 rounded-2xl shadow-md font-semibold max-w-sm">
                Save
            </button>
        </div>
        <div className="flex flex-col gap-4">
            {elements.map((el, idx) => (
                <div key={idx} className="grid-container align-middle rounded-lg bg-blue-600 p-1" onClick={() => select_lesson_idx(idx)}>
                    <h2 className="p-0.5">{el}</h2>
                </div>
            ))}
        </div>
    </div>);
}
