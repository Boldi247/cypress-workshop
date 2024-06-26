import SectionContainer from "@/components/SectionContainer";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React, { useRef, useState } from "react";

const AdvancedInputTypes = () => {
  const [checkBox, setCheckBox] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<string>("Volvo");
  const [slider, setSlider] = useState<number>(50);

  const checkBoxLabelColor = checkBox ? "text-red-500" : "text-white";

  return (
    <SectionContainer>
      {" "}
      <div className="mb-4">
        <h1 className="text-2xl">Advanced Input Types</h1>
        <h2 className="text-slate-400">Checkboxes, dropdowns and more...</h2>
      </div>
      <p>Let's locate these elements and interact with them using Cypress.</p>
      <div className="flex items-center gap-2">
        <span className={checkBoxLabelColor} data-cy="red-text">
          Red text
        </span>
        <Input
          data-cy="cy-checkbox"
          type="checkbox"
          className="w-fit"
          onChange={(e) => setCheckBox(e.target.checked)}
        />
      </div>
      <div className="flex items-center gap-4">
        <select
          name="cars"
          id="cars"
          className="text-black px-2 py-1 rounded-lg border-2 border-green-700"
          onChange={(e) => setDropdown(e.target.value)}
          data-cy="cy-select"
        >
          <option value="Volvo">Volvo</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Opel">Opel</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
        </select>
        <p>
          Selected brand:{" "}
          {dropdown ? (
            <span className="text-green-200" data-cy="cy-brand">
              {dropdown}
            </span>
          ) : (
            <span className="text-red-200" data-cy="cy-brand">
              None
            </span>
          )}
        </p>
      </div>
      <div className="mt-2 flex items-center gap-4">
        <input
          type="range"
          min={1}
          max={100}
          value={slider}
          onChange={(e) => setSlider(Number(e.target.value))}
        />
        <span className="text-white">{slider}</span>
      </div>
    </SectionContainer>
  );
};

export default AdvancedInputTypes;
