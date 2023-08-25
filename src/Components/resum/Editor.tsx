import { useState } from "react";
import { SectionsType } from "./Type";

interface EditorProps {
  sections: SectionsType;
}

const Editor = ({ sections }: EditorProps) => {
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  return (
    <div className="custom-container mb-24">
      <div className="flex mt-10 overflow-x-auto justify-between items-center border-t border-b py-5">
        {Object.keys(sections).map((key) => (
          <div
            className={`font-semibold cursor-pointer ${
              activeSectionKey === key
                ? "text-purple-700 border-b border-purple-600 "
                : ""
            }`}
            onClick={() => setActiveSectionKey(key)}
            key={key}
          >
            {sections[key as keyof SectionsType]} {/* Use the 'as' assertion */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Editor;
