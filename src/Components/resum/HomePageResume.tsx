import React from "react";
import Editor from "./Editor";
import { SectionsType } from "./Type";

const HomePageResume = () => {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];

  const sections: SectionsType = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mt-10 custom-container">
        <div className="flex space-x-4 items-center">
          {colors.map((color, index) => (
            <span
              key={index}
              style={{ backgroundColor: color }}
              className="w-4 h-4 rounded-full"
            />
          ))}
        </div>
        <div className="">
          <h2 className="text-xl font-bold">Resume Generator</h2>
        </div>

        <div className="">
          <button className="px-6 py-3 border ">Download</button>
        </div>
      </div>

      <Editor sections={sections}></Editor>
    </div>
  );
};

export default HomePageResume;
