"use client"
import React, { useState, useEffect } from 'react';

type Props = {
    pick_lesson: (_: number) => void;
}
export default function ShowLessons({ pick_lesson }: Props) {

    const [elements, setElements] = useState<string[]>([]);


    useEffect(() => {
        const saved = localStorage.getItem('plans_elements');
        if (saved != null) {
            for (let i = 1; i < saved.length + 1; i++) {
                const data : any = JSON.parse(localStorage.getItem(`lesson_${i}`) || '{}');
                const plan = data as {type: string, title: string, week: number, day: number, index: number};
                if (plan.title === undefined) {
                    plan.title = `lesson ${i}`;
                } else {
                    plan.title += ` (Week ${plan.week}, Day ${plan.day})`;
                }
                setElements(prev => [...prev, `${plan.type} + ${plan.title}`]);

            }
        }
    }, []);

    // Save elements to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('plans_elements', JSON.stringify(elements));
    }, [elements]);

    const handleClick = () => {
        {   
            interface Plan  {
                type: string;
                title: string;
                description: string;
                week: number;
                day: number;
                index: number;
            }
            
            console.log(elements.length);
            const data : any = JSON.parse(localStorage.getItem(`lesson_${elements.length + 1}`) || '{}');
            const plan : Plan = data as Plan;
            if (plan.title === undefined) {
                plan.title = `${plan.type} ${elements.length + 1}`;
                setElements(prev => [...prev, `${plan.title}`]);
            } else {
                plan.title += ` (Week ${plan.week}, Day ${plan.day})`;
                setElements(prev => [...prev, `${plan.type} + ${plan.title}`]);
            }
            
        }
    };

    const handleClear = () => {
        setElements([]);
        localStorage.clear();
    }

    return (<div className="flex flex-col gap-4">
        <div className="flex flex-row gap-10 justify-center">
            <h2 className="text-3xl font-semibold">View all plans</h2>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-md font-semibold max-w-sm" onClick={handleClick}>
                + Create New Plan
            </button>
            
            <button className="bg-transparent border border-red-500 text-red-500 px-6 py-3 rounded-2xl shadow-md font-semibold max-w-" onClick={handleClear}>
                Clear
            </button>
        </div>
        <div className="flex flex-col gap-4">
            {elements.map((el, idx) => (
                <div key={idx} className="grid-container align-middle rounded-lg bg-blue-600 p-1" onClick={() => pick_lesson(idx + 1)}>
                    <h2 className="p-0.5">{el}</h2>
                </div>
            ))}
        </div>
    </div>);
}
