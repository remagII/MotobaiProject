import React, { useState } from "react";
import Table from "../../DynamicComponents/DynamicTable.jsx";
import Overview from "../../Overview.jsx";
import DynamicModal from "../../DynamicComponents/DynamicModal.jsx";
<<<<<<< Updated upstream
import DetailsStockModal from "./DetailsStockModal.jsx"
=======
import DetailsOrderModal from "./DetailsOrderModal.jsx";
>>>>>>> Stashed changes
import { useFetchData } from "../../Hooks/useFetchData.js";

export default function Orders() {
  const [orderDetails, setOrderDetails] = useState([]);
<<<<<<< Updated upstream
  const { data: order } = useFetchData('order');
=======
  const [orderId, setOrderId] = useState();
  const { data: order } = useFetchData("order");
>>>>>>> Stashed changes

  //DISPLAY TEMPLATE ON <TABLE></TABLE>
  const tableColumns = [
    {
      header: "Order ID",
      row: "id",
    },

    {
      header: "Number of Products",
      customRender: (item) => {
        return <p>{item.order_details.length}</p>;
      },
    },

    {
      header: "Total Price",
      row: "status",
    },

    {
      header: "Customer",
      row: "account_name",
    },
    {
      header: "Employee",
      customRender: (item) => {
        return (
          <p>
            {item.employee_last_name}, {item.employee_first_name},{" "}
            {item.employee_middle_name}
          </p>
        );
      },
    },

    {
      header: "Date and Time Created",
      customRender: (item) => {
        const createdAtDate = new Date(item.order_date);
        const options = { hour: "numeric", minute: "numeric", hour12: true }; // Options for formatting time
        const formattedTime = createdAtDate.toLocaleString("en-US", options); // Format the time
        const formattedDate = `${
          createdAtDate.getMonth() + 1
        }/${createdAtDate.getDate()}/${createdAtDate.getFullYear()} - ${formattedTime}`;

        return <p>{formattedDate}</p>;
      },
    },

    {
      header: "Status",
      row: "status",
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
    const selectedItem = order[index]; // Get the log based on the row clicked
    setOrderDetails(selectedItem.order_details); // Set the specific log's items

    setDetailsRow(index);
    setMethod("Details");

    toggleModal();
  };

  // DISPLAY TEMPLATE ON <OVERVIEW></OVERVIEW>
  const overviewArr = [{ title: "Orders", quantity: `${order.length}` }];

  return (
    <section className={`font-main h-full overflow-hidden`}>
      <div className={`bg-normalGray box-border flex h-full `}>
        <Overview title={`Order Management`} overviewArr={overviewArr} />

        <div className={`flex flex-col flex-1 m-4`}>
          <div className={`m-4`}>
            <div className={`flex justify-between mb-12`}>
              <h1 className={`text-3xl font-bold`}>Order Management</h1>
            </div>
            <Table
              columnArr={tableColumns}
              dataArr={order}
              editRow={handleRowDetails}
            />
          </div>
        </div>
      </div>
      <DynamicModal modal={modal} toggleModal={toggleModal}>
        <DetailsStockModal logsData={orderDetails} />
      </DynamicModal>
    </section>
  );
}
