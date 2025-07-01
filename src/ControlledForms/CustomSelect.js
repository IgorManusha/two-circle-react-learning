const CustomSelect = ({ value, setValue }) => {
  const selectOptions = [
    { id: 1, value: "Viktor" },
    { id: 2, value: "Anjelika" },
    { id: 3, value: "Yuliya" },
    { id: 4, value: "Igor" },
    { id: 5, value: "Larisa" },
    { id: 6, value: "Vladimir" },
  ];

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    const select = e.target.value;
    setValue({ ...value, select });
  };

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <label htmlFor="select">Select</label>
      <select onChange={handleSelectChange} id="select" type="select">
        {selectOptions.map((element) => (
          <option key={element.id}>{element.value}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
