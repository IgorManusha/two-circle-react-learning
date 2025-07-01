import { useState } from "react";
import InputData from "./InputData";
import Checkbox from "./Checkbox";
import Inputs from "./Inputs";
import RadioButtons from "./RadioButtons";
import CustomSelect from "./CustomSelect";

const ControlledForms = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    checkbox: "",
    radio: "",
    select: "",
  });

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Inputs value={value} setValue={setValue} />
        <Checkbox value={value} setValue={setValue} />
        <RadioButtons value={value} setValue={setValue} />
        <CustomSelect value={value} setValue={setValue} />
        <button type="submit">submit</button>
      </form>
      <InputData value={value} />
    </div>
  );
};

export default ControlledForms;
