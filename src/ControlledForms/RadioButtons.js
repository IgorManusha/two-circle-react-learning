const RadioButtons = ({ value, setValue }) => {
  const handleRadioChange = (e) => {
    const radio = e.target.name;
    setValue({ ...value, radio });
  };

  return (
    <div>
      <div>
        <label htmlFor="radio1">radio1</label>
        <input
          onChange={handleRadioChange}
          checked={value.radio === "radio1"}
          name="radio1"
          id="radio1"
          type="radio"
        ></input>
      </div>
      <div>
        <label htmlFor="radio2">radio2</label>
        <input
          onChange={handleRadioChange}
          checked={value.radio === "radio2"}
          name="radio2"
          id="radio2"
          type="radio"
        ></input>
      </div>
    </div>
  );
};

export default RadioButtons;
