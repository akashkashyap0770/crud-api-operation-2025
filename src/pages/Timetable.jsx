import React, { useState } from "react";
import { TIMETABLE } from "../utils/Data";

function Timetable() {
  const { image } = TIMETABLE;

  const [item, setItem] = useState("");
  const [sTime, setSTime] = useState("");
  const [eTime, setETime] = useState("");
  const [listData, setListData] = useState([]);

  const addList = () => {
    if (item.trim() === "" || sTime.trim() === "" || eTime.trim() === "") return;
    setListData((prevList) => {
      const copyListData = [...prevList, { item, sTime, eTime }];
      setItem("");
      setSTime("");
      setETime("");
      return copyListData;
    });
  };

  const removeItem = (indexToRemove) => {
    setListData((prevList) => prevList.filter((_, i) => i !== indexToRemove));
  };

  const clearAll = () => {
    setListData([]);
  };

  return (
    <section className="p-4 sm:p-5 md:p-8">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img src={image} alt="" className="h-48 w-48 sm:h-60 sm:w-60 lg:h-80 lg:w-80 object-contain" />
        </div>

        {/* Input Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-y-5">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center">Add Your Timetable:</h1>

          <div className="flex flex-col p-4 sm:p-5 gap-y-5 rounded-md bg-gray-300 w-full max-w-md shadow-md">
            <input
              type="text"
              value={item}
              placeholder="Add your schedule"
              className="text-sm sm:text-base p-2 outline-none bg-gray-100 shadow-inner shadow-black rounded-md"
              onChange={(e) => setItem(e.target.value)}
            />

            {/* Time Pickers */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
                <label className="text-sm sm:text-base">Start Time</label>
                <input
                  type="time"
                  value={sTime}
                  className="text-sm p-2 bg-gray-100 rounded-md w-full sm:w-36"
                  onChange={(e) => setSTime(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
                <label className="text-sm sm:text-base">End Time</label>
                <input
                  type="time"
                  value={eTime}
                  className="text-sm p-2 bg-gray-100 rounded-md w-full sm:w-36"
                  onChange={(e) => setETime(e.target.value)}
                />
              </div>
            </div>

            <button
              className="w-full sm:w-28 text-sm sm:text-base py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500"
              onClick={addList}
            >
              Add list
            </button>
          </div>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="mt-10 flex flex-col gap-y-3">
        <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold underline text-center">
          Here is your Schedule:
        </h2>

        <div className="overflow-x-auto mt-4">
          <table className="w-full border border-black text-center bg-gray-200 text-xs sm:text-sm md:text-base">
            <thead className="text-white bg-gray-600">
              <tr>
                <th className="px-2 py-2">S.no</th>
                <th className="px-2 py-2">Task</th>
                <th className="px-2 py-2">Start Time</th>
                <th className="px-2 py-2">End Time</th>
                <th className="px-2 py-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {listData.map((element, index) => (
                <tr key={index}>
                  <td className="px-2 py-2">{index + 1}</td>
                  <td className="px-2 py-2">{element.item}</td>
                  <td className="px-2 py-2">{element.sTime}</td>
                  <td className="px-2 py-2">{element.eTime}</td>
                  <td className="px-2 py-2">
                    <button
                      className="bg-orange-600 text-white px-2 py-1 rounded hover:bg-orange-500"
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Clear All Button */}
        {listData.length >= 2 && (
          <div className="flex justify-center pt-6">
            <button
              className="px-6 sm:px-10 py-2 bg-red-600 text-white rounded hover:bg-red-500"
              onClick={clearAll}
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Timetable;
