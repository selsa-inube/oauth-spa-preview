import { useAuth0 } from "@auth0/auth0-react";
import { Table } from "antd";
import { useEffect, useState } from "react";
import "../styles/table.css";

/* const dataSource = [
  {
    key: "1",
    address: "10 Downing Street",
    city: "10 Downing Street",
  },
  {
    key: "2",
    address: "10 Downing Street",
    city: "42",
  },
];
 */
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState();
  const { getAccessTokenSilently } = useAuth0();

  const fetchData = async () => {
    const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:8085";

    const token = await getAccessTokenSilently();
    console.log(token);
    const res = await fetch(`${baseUrl}/employees`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res
      .json()
      .then((json) => {
        setEmployees(json);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(
    () => {
      fetchData();
    },
    // eslint-disable-next-line
    []
  );

  if (isLoading) {
    return (
      <>
        <div className="container">
          <h1>Work employees!</h1>
          <p>Loading employees...</p>
        </div>
      </>
    );
  }

  return (
    <div className="table-container">
      <Table className="table" dataSource={employees} columns={columns} />
    </div>
  );
}
