import { useMutation, useQuery } from "@tanstack/react-query";
import { addContact, getDataList } from "./api";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Fragment } from "react";

const RestComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["contactsList"],
    queryFn: getDataList,
  });

  const { mutateAsync } = useMutation({
    mutationFn: (payload) => addContact(payload),
  });

  const addNewContact = async () => {
    const payload = {
      name: "Yuliya",
      lastName: "Procenko",
      profesion: "Product manager",
    };
    try {
      await mutateAsync(payload);
      await refetch();
    } catch (error) {}
  };

  return (
    <div>
      <button onClick={() => navigate(-1)}>return</button>
      <ul>
        {isFetching ? (
          <div className="loader"></div>
        ) : (
          data.map((element) => (
            <Fragment key={element.id}>
              <li>
                <p>
                  {element.name} {element.profesion}
                </p>
              </li>
              <Link style={{ color: "blue" }} to={`${element.id}`}>
                Watch about this contact
              </Link>
            </Fragment>
          ))
        )}
      </ul>
      <button onClick={addNewContact}>add</button>
    </div>
  );
};

export default RestComponent;
