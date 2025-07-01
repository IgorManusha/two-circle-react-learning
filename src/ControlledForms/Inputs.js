import { debounce } from "lodash";

const Inputs = ({ value, setValue }) => {
  const handleChangeName = debounce((e) => {
    const name = e.target.value;
    setValue((prevState) => ({ ...prevState, name }));
  }, 2000);

  const handleChangeEmail = (e) => {
    const email = e.target.value;
    setValue((prevState) => ({ ...prevState, email }));
  };

  setTimeout(() => {
    console.log("hello Igor Manusha Middle Frontend Developer for Rreact");
  }, 5000);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <div style={{ display: "flex", gap: "12px" }}>
        <label htmlFor="name">Name</label>
        <input onChange={handleChangeName} id="name" name="name" type="text" />
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChangeEmail}
          id="email"
          name="email"
          type="email"
        />
      </div>
    </div>
  );
};

export default Inputs;
