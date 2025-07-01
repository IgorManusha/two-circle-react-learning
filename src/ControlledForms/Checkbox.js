const Checkbox = ({ value, setValue }) => {
  const handleCheckboxChange = (e) => {
    const checkbox = e.target.checked;
    setValue({ ...value, checkbox });
  };

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <label htmlFor="checkbox">Checkbox</label>
      <input
        onChange={handleCheckboxChange}
        id="checkbox"
        name="checkbox"
        type="checkbox"
      />
    </div>
  );
};

export default Checkbox;
