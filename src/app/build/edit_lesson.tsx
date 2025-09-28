'use client';
import React, { useState } from 'react';

type Props = {
  lesson_idx: number;
};

type CurriculumItem = {
  itemType: string;
  title: string;
  description: string;
  weekNumber: number;
  dayNumber: number;
};

export default function EditLesson({ lesson_idx }: Props) {
  const [selectedType, setSelectedType] = useState<string>('');
  const [item, setItem] = useState<CurriculumItem>({
    itemType: '',
    title: '',
    description: '',
    weekNumber: 1,
    dayNumber: 1
  });

  const onTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    setSelectedType(type);
    setItem({
      itemType: type,
      title: '',
      description: '',
      weekNumber: 1,
      dayNumber: 1
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: name === 'weekNumber' || name === 'dayNumber' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const curriculumData = {
        itemType: item.itemType,
        title: item.title,
        description: item.description,
        week: item.weekNumber,
        day: item.dayNumber  
    };
    const jsonData = JSON.stringify(curriculumData);
    localStorage.setItem(`lesson_${lesson_idx}`, jsonData);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-8 gap-6 text-white">
      <h2 className="text-4xl font-bold">Edit Plan {lesson_idx}</h2>

      <div className="w-full max-w-lg flex flex-col gap-6">
        {/* Plan Type Dropdown */}
        <div className="flex justify-center">
          <select
            value={selectedType || "DEFAULT"}
            onChange={onTypeChange}
            className="bg-gray-800 text-white px-5 py-3 rounded-2xl shadow-lg font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            <option value="DEFAULT" disabled hidden>
              Choose Type of Plan
            </option>
            <option value="Lesson">Lesson</option>
            <option value="Activity">Activity</option>
            <option value="Assignment">Assignment</option>
            <option value="Quiz">Quiz</option>
            <option value="Test">Test</option>
          </select>
        </div>

        {/*Form based on dropdown select */}
        {selectedType && (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 rounded-3xl shadow-xl p-6 flex flex-col gap-4 border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">{selectedType} Details</h3>

            <input

              type="text"
              name="title"
              placeholder="Title"
              value={item.title}
              onChange={handleInputChange}
              className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />

            <textarea
              name="description"
              placeholder="Description"
              value={item.description}
              onChange={handleInputChange}
              className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white shadow-sm h-28 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />

            <div className="flex gap-4">
              <div className="flex flex-col flex-1">
                <label className="text-sm mb-1 text-gray-300">Week</label>
                <input
                  type="number"
                  name="weekNumber"
                  min={1}
                  value={item.weekNumber}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  required
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-sm mb-1 text-gray-300">Day</label>
                <input
                  type="number"
                  name="dayNumber"
                  min={1}
                  value={item.dayNumber}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300"
            >
              Submit {selectedType}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
