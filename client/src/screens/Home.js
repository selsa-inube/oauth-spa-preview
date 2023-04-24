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
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [sites, setSites] = useState();

  const fetchData = async () => {
    const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:8085";
    const res = await fetch(`${baseUrl}/sites`);
    res
      .json()
      .then((json) => {
        setSites(json);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="container">
          <h1>Work Sites!</h1>
          <p>Loading sites...</p>
        </div>
      </>
    );
  }

  return (
    <div className="table-container">
      <Table className="table" dataSource={sites} columns={columns} />
    </div>
  );
}
