import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleContact } from "../RestApi/api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const SingleContact = () => {
  const { id } = useParams();
  const value = useContext(AuthContext);

  const { data, isFetching } = useQuery({
    queryKey: ["singleContact"],
    queryFn: () => getSingleContact(id),
  });

  console.log(value);

  return isFetching ? (
    <div className="loader"></div>
  ) : (
    <div>
      <h1>Name : {data.name}</h1>
      <h1>Last name : {data.lastName}</h1>
      <h1>Profession : {data.profesion}</h1>
    </div>
  );
};

export default SingleContact;
