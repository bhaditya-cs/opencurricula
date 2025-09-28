'use client';
import Link from "next/link";
import ShowLessons from "./show_lessons";
import React, { useState } from 'react';
import EditLesson from "./edit_lesson";

export default function Build() {
  const [selected_lesson, select_lesson_idx] = useState(0);

  const [curriculumTitle, setCurriculumTitle] = useState('');
  const [curriculumDescription, setCurriculumDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 gap-8">
      <div className="p-6 flex flex-col h-screen m-0 p-0 gap-8">

        <h1 className="text-5xl font-extrabold tracking-tight border-b pb-4">Start building lessons</h1>

        {/* Curriculum Form */}
        <div className="bg-gray-800 p-4 rounded-2xl shadow-md flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold border-b pb-2">Curriculum Info</h2>
            <button
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Minimize' : 'Maximize'}
            </button>
          </div>

          {isExpanded && (
            <div className="flex flex-col gap-4 mt-2">
              <input
                type="text"
                value={curriculumTitle}
                onChange={(e) => setCurriculumTitle(e.target.value)}
                placeholder="Curriculum Title"
                className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <textarea
                value={curriculumDescription}
                onChange={(e) => setCurriculumDescription(e.target.value)}
                placeholder="Curriculum Description"
                className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <div className="flex gap-4">
                <div className="flex flex-col flex-1">
                  <label className="text-gray-300 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label className="text-gray-300 mb-1">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Lessons */}
        <div className="flex divide-x divide-gray-300 flex-1 overflow-auto w-full gap-8">
          <div className="flex p-8 w-1/2 gap-16">
            <ShowLessons pick_lesson={select_lesson_idx}/>
          </div>
          <div className="p-4 w-1/2">
            {selected_lesson > 0 &&
              (<EditLesson lesson_idx={selected_lesson}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}
