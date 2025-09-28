"use client";
import Link from "next/link";
import ShowLessons from "./show_lessons";
import React, { useState } from 'react';

export default function Build() {
    const [selected_lesson, select_lesson_idx] = useState(-1);
    return (
        <div className=" min-h-screen bg-gray-900 text-white p-8 gap-8">
            <div className=" p-6 flex flex-col h-screen m-0 p-0">
                <h1 className="text-5xl font-extrabold tracking-tight border-b pb-4">Start building lessons</h1>

                <div className="flex divide-x divide-gray-300 flex-1 overflow-auto w-full m-0 p-0">
                    <div className="flex p-8 w-1/2 gap-16">
                        <ShowLessons select_lesson_idx={select_lesson_idx}/>
                    </div>

                    <div className="p-4 w-1/2">
                        <h2 className="text-lg font-semibold">Component Two</h2>
                        <p>{selected_lesson}</p>
                    </div>
                </div>
            </div>

        </div>);
    /*(
           <div classNameName=" min-h-screen bg-gray-900 text-white flex flex-col items-center p-8 sm:p-20 gap-16">
               <h1 classNameName="text-5xl font-extrabold tracking-tight">Start Building Lessons</h1>
               <button classNameName="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-md font-semibold max-w-sm" onClick={handleClick}>
                   + Create New Lesson
               </button>
               <div>
                   {elements.map((el, idx) => (
                       <h2 key={idx} style={{ marginTop: 8 }}>{el}</h2>
                   ))}
               </div>
           </div>
           ); */


}
