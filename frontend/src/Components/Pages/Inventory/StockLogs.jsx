import React, { useState } from "react";
import Table from "../../DynamicComponents/DynamicTable.jsx";
import Overview from "../../Overview.jsx";
import DynamicModal from "../../DynamicComponents/DynamicModal.jsx";
import DetailsStockModal from "./DetailsStockModal.jsx";
import { useFetchData } from "../../Hooks/useFetchData.js";

export default function Inventory() {
  const [inboundStockItem, setInboundStockItem] = useState([]);
  const { data: logs } = useFetchData('stockin');

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
    const selectedLog = logs[index]; // Get the log based on the row clicked
    setInboundStockItem(selectedLog.inboundStockItems); // Set the specific log's items

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
        <DetailsStockModal logsData={inboundStockItem} />
      </DynamicModal>
    </section>
  );
}
