'use client';

import { useEffect, useState } from 'react';

type CurriculumItem = {
  itemType: string;
  title: string;
  description: string;
  weekNumber: number;
  dayNumber: number;
};

type Curriculum = {
  curriculumId: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  items?: CurriculumItem[];
};

export default function ExplorePage() {
  const [curriculums, setCurriculums] = useState<Curriculum[]>([]);
  const [selected, setSelected] = useState<Curriculum>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all curriculums
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await fetch("http://localhost:8080/curriculum/get");
        if (!res.ok) throw new Error(`Failed with status ${res.status}`);
        const data = await res.json();
        setCurriculums(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  // Fetch details of one curriculum
  const fetchDetails = async (id: number) => {
    setLoading(true);
    try {

      const res = await fetch(`http://localhost:8080/curriculum/getPlans/${id}`);
      const otherRes = await fetch(`http://localhost:8080/curriculum/get/${id}`);
      if (!res.ok) throw new Error(`Failed with status ${res.status}`);
      const data = await res.json();
      let data2 = await otherRes.json();
      console.log(data);
   
      data2["items"] = data;
      console.log(data2);
      setSelected(data2);
      console.log("Selected curriculum:", selected);
      console.log(selected?.curriculumId);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-gray-900 text-red-400 flex items-center justify-center">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">Explore Curriculums</h1>

      {/* Left side: all curriculums */}
      <div className="flex gap-8">
        <div className="w-1/3 bg-gray-800 p-4 rounded-xl shadow-md">
          <h2 className="text-2xl mb-4 font-semibold">Available Curriculums</h2>
          <div className="flex flex-col gap-3">
            {curriculums.map((c) => (
              <button
                key={c.curriculumId}
                onClick={() => fetchDetails(c.curriculumId)}
                className={`p-3 rounded-lg text-left transition ${
                  selected?.curriculumId === c.curriculumId
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                }`}
              >
                <h3 className="text-lg font-bold">{c.name} + {c.curriculumId}</h3>
                <p className="text-sm text-gray-400">{c.description || 'No description'}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Right side: selected curriculum details */}
        <div className="w-2/3 bg-gray-800 p-6 rounded-xl shadow-md">
          {selected ? (
            <>
              <h2 className="text-3xl font-bold mb-2">{selected.name}</h2>
              <p className="text-gray-300 mb-4">{selected.description}</p>
              <p className="text-sm text-gray-400">
                {selected.startDate} → {selected.endDate}
              </p>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Plans</h3>
              <div className="flex flex-col gap-3">
                
                {selected.items && selected.items.length > 0 ? (
                  selected.items.map((item, idx) => (
                    <div key={idx} className="bg-gray-700 p-3 rounded-lg">
                      <h4 className="font-bold text-lg">{item.itemType}: {item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                      <p className="text-sm text-gray-400">Week {item.weekNumber}, Day {item.dayNumber}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">No items yet</p>
                )}
              </div>
            </>
          ) : (
            <p className="text-gray-400">Select a curriculum to see details</p>
          )}
        </div>
      </div>
    </div>
  );
}
