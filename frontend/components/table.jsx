"use client";

import { useState } from "react";

export default function Table() {
  const [tableData, setTableData] = useState([
    { id: 1, task: "Complete project documentation", completed: false, priority: "High" },
    { id: 2, task: "Review code changes", completed: true, priority: "Medium" },
    { id: 3, task: "Update dependencies", completed: false, priority: "Low" },
    { id: 4, task: "Run tests", completed: false, priority: "High" },
    { id: 5, task: "Deploy to staging", completed: false, priority: "Medium" },
  ]);
  
  const [questions, setQuestions] = useState([
    { id: 1, question: "What is the expected completion date?", answer: "" },
    { id: 2, question: "Are there any blockers?", answer: "" },
    { id: 3, question: "What resources are needed?", answer: "" },
  ]);

  const handleCheckboxChange = (id) => {
    setTableData(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };


  return (
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tasks</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left">Complete</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Task</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Priority</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id} className={item.completed ? "bg-green-50" : "bg-white"}>
                  <td className="border border-gray-300 px-4 py-3">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => handleCheckboxChange(item.id)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </td>
                  <td className={`border border-gray-300 px-4 py-3 ${item.completed ? 'line-through text-gray-500' : ''}`}>
                    {item.task}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      item.priority === 'High' ? 'bg-red-100 text-red-800' :
                      item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      item.completed ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {item.completed ? 'Completed' : 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
  );
}