import React, { useState, useEffect } from "react";
import {
  UserPlusIcon,
  ArrowsPointingOutIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Table from "../DynamicTable.jsx";
import Overview from "../Overview.jsx";
import StockInForm from "./StockInForm.jsx";
import DynamicModal from "../DynamicModal.jsx";

export default function Inventory() {
  
  // fetch 
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchInboundStock();
  }, []);

  const fetchInboundStock = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/stockin/list?format=json"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch logs");
      }
      const data = await response.json();
      setLogs(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching logs:", error);
    }
  };

  //DISPLAY TEMPLATE ON <TABLE></TABLE>
  const tableColumns = [
    {
      header: "Stock-in ID",
      row: "id", // cant fix how
    },

    {
      header: "Number of Items",
      customRender: (item) => {
        // count how many "inboundStockItems"
        <p>{logs.length}</p>
      },
    },
    {
      header: "Date Created",
      row: "date_created",
    },
  ];

  // DISPLAY TEMPLATE ON <OVERVIEW></OVERVIEW>
  const overviewArr = [{ title: "EDIT HERE", quantity: `${logs.length}` }];

  return (
    <section className={`font-main h-full overflow-hidden`}>
      <div className={`bg-normalGray box-border flex h-full `}>
        <Overview title={`Stock-in Information`} overviewArr={overviewArr} />

        <div className={`flex flex-col flex-1 m-4 `}>
          <div className={`m-4`}>
            <div className={`flex justify-between`}>
              <h1 className={`text-3xl font-bold`}>Stock-in Information</h1>
            </div>
            <Table
              columnArr={tableColumns}
              dataArr={logs}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
