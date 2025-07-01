import axios from "axios";
import { useEffect, useState } from "react";

const RestComponent = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const dbData = async () => {
      const response = await axios.get("http://localhost:3030/posts");
      const responseData = await response.data;
      setData(responseData);
    };
    dbData();
  }, []);

  return (
    <div>
      {data ? (
        data.map((element) => <h1 key={element.id}>{element.name}</h1>)
      ) : (
        <h1>Loadin...</h1>
      )}
    </div>
  );
};

export default RestComponent;
