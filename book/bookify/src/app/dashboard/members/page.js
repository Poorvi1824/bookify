"use client";

import react, { useState } from "react";

const Members = () => {
  const [members, setMembers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member) => (
          <div key={member.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;