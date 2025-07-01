const InputData = ({ value }) => {
  return (
    <div>
      <p>Name : {value.name}</p>
      <p>Email : {value.email}</p>
      <p>CheckBox : {value.checkbox.toString()}</p>
      <p>Select : {value.select}</p>
    </div>
  );
};

export default InputData;
