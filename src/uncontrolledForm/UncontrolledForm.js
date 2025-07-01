//ЦЕ ВАРІАНТ ОТРИМАННЯ ДАННИХ З ФОРМИ ЧЕРЕЗ useRef
import { useRef } from "react";

const UncontrolledForm = () => {
  const useFormData = useRef();

  const handleFormData = (e) => {
    e.preventDefault();
    const name = useFormData.current.name.value;
    const email = useFormData.current.email.value;

    console.log({ name, email });
    useFormData.current.reset();
  };

  return (
    <div>
      <form ref={useFormData} onSubmit={handleFormData}>
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email" />
        <button type="submit">submit text</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;

//ЦЕ ВАРІАНТ ОТРИМАННЯ ДАННИХ З ФОРМИ ЧЕРЕЗ EVENT
// const UncontrolledForm = () => {
//   const handleFormData = (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const email = e.target.email.value;

//     console.log({ name, email });
//   };

//   return (
//     <div>
//       <form onSubmit={handleFormData}>
//         <input type="text" name="name" placeholder="name" />
//         <input type="email" name="email" placeholder="email" />
//         <button type="submit">submit text</button>
//       </form>
//     </div>
//   );
// };

// export default UncontrolledForm;
