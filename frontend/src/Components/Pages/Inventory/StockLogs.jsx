import React, { useState, useEffect } from "react";
import { ACCESS_TOKEN } from "../../../constants.js";
import {
  UserPlusIcon,
  ArrowsPointingOutIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Table from "../../DynamicComponents/DynamicTable.jsx";
import Overview from "../../Overview.jsx";
import DynamicModal from "../../DynamicComponents/DynamicModal.jsx";
import DetailsStockModal from "./DetailsStockModal.jsx";

export default function Inventory() {
  const token = localStorage.getItem(ACCESS_TOKEN);

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchInboundStock();
  }, []);

  const fetchInboundStock = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/stockin/list?format=json",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
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
      row: "id", 
    },

    {
      header: "Number of Items",
      customRender: (item) => {
        return <p>{item.inboundStockItems.length}</p>;
      },
    },
    {
      header: "Date and Time Created",
      customRender: (item) => {
        const createdAtDate = new Date(item.date_created);
        const options = { hour: "numeric", minute: "numeric", hour12: true }; // Options for formatting time
        const formattedTime = createdAtDate.toLocaleString("en-US", options); // Format the time
        const formattedDate = `${
          createdAtDate.getMonth() + 1
        }/${createdAtDate.getDate()}/${createdAtDate.getFullYear()} - ${formattedTime}`;

        return <p>{formattedDate}</p>;
      },
    },
  ];

  const [modal, setModal] = useState(false);
  const [method, setMethod] = useState("None");
  const [detailsRow, setDetailsRow] = useState(null);

  const toggleModal = () => {
    setModal((m) => (m = !m));

    if (method == "Details") {
      setMethod("None");
      setDetailsRow(null);
    }
  };

  const handleRowDetails = (index) => {
    setDetailsRow(index);
    setMethod("Details");

    toggleModal();
  };

  // DISPLAY TEMPLATE ON <OVERVIEW></OVERVIEW>
  const overviewArr = [{ title: "Stock In", quantity: `${logs.length}` }];

  return (
    <section className={`font-main h-full overflow-hidden`}>
      <div className={`bg-normalGray box-border flex h-full `}>
        <Overview title={`Stock-in Information`} overviewArr={overviewArr} />

        <div className={`flex flex-col flex-1 m-4`}>
          <div className={`m-4`}>
            <div className={`flex justify-between mb-12`}>
              <h1 className={`text-3xl font-bold`}>Stock-in History</h1>
            </div>
            <Table
              columnArr={tableColumns}
              dataArr={logs}
              editRow={handleRowDetails}
            />
          </div>
        </div>
      </div>
      <DynamicModal modal={modal} toggleModal={toggleModal}>
        <DetailsStockModal logsData={logs} />
      </DynamicModal>
    </section>
  );
}
