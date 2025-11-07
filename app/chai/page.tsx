import React from "react";

export default function ChaiPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-6xl mt-8">Chai Page</div>

      <img
        className="mt-10"
        src="/tea.jpg"
        height={300}
        width={300}
        alt="Tea image "
      />
    </div>
  );
}
