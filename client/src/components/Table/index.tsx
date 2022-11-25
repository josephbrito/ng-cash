import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import DataTable from "react-data-table-component";
import { api } from "../../services";

import { Container } from "./styles";

interface IData {
  value: number;
  createdAt: string;
}

const columns = [
  {
    name: "VALUE DEBITED",
    selector: (row: any) => row.value,
  },
  {
    name: "DATE",
    selector: (row: any) => row.date,
  },
];

const Table: React.FC = () => {
  const [data, setData] = useState([]);

  const callData = async () => {
    const req = await api.get("transactions");

    console.log(req.data);

    const newData = req.data.map((datas: IData) => {
      return {
        value: datas.value,
        date: datas.createdAt.slice(0, 10),
      };
    });

    setData(newData);
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <Container>
      <DataTable columns={columns} data={data} />
    </Container>
  );
};

export default Table;
