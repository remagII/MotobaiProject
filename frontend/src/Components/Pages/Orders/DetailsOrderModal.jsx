import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Logo.png";
import Table from "../../DynamicComponents/DynamicTable";
import api from "../../../api";

const DetailsOrderModal = ({ logsData, orderId }) => {
  useEffect(() => {
    console.log("Order ID in modal:", orderId); // Log Order ID when modal is opened
  }, [orderId]);

  const [buttonValidationState, setButtonValidationState] = useState("");

  const updateStatus = async (status) => {
    let date_field = "";

    if (status == "validated") {
      date_field = "date_validated";
    } else if (status == "shipped") {
      date_field = "date_shipped";
    } else if (status == "completed") {
      date_field = "date_completed";
    } else if (status == "cancelled") {
      date_field = "date_cancelled";
    } else if (status == "returned") {
      date_field = "date_returned";
    }
    try {
      const currentDate = new Date().toISOString();

      const res = await api.put(
        `http://127.0.0.1:8000/api/ordertracking/update/${orderId}/`,
        {
          status: status,
          [date_field]: currentDate,
        }
      );
      console.log(`Order status updated to: ${status}`);
    } catch (error) {
      console.error(`Error changing state`, error);
    }
  };

  const tableColumns = [
    {
      header: "Product Name",
      customRender: (item) => {
        return <p>{item.product_name}</p>;
      },
    },

    {
      header: "Quantity Added",
      customRender: (item) => {
        return <p>{item.quantity}</p>;
      },
    },
    {
      header: "Item Price",
      customRender: (item) => {
        return <p>{item.product_price}</p>;
      },
    },
    {
      header: "Total Price",
      customRender: (item) => {
        return <p>{item.quantity * item.product_price}</p>;
      },
    },
  ];

  // REUSABLE BUTTON
  function OrderModalButton({ onClick, buttonName }) {
    return (
      <div
        className={`shadow-md bg-white border-2 border-red-700 rounded px-4 py-2 hover:bg-red-700 hover:text-white transition-all duration-100 flex gap-4 items-center`}
      >
        <button onClick={onClick}>{buttonName}</button>
      </div>
    );
  }

  return (
    <section>
      <div
        className={`absolute inset-0 w-fit h-fit m-auto bg-mainColor rounded-lg z-10
            `}
      >
        <div className={`bg-mainColor w-1/2 rounded-l-lg`}>
          <img
            className="max-w-16 rounded-l-xl"
            src={Logo}
            alt="Motobai-Logo"
          />
        </div>
        <div
          className={`flex flex-col justify-between bg-gray-100 p-12 pr-6 h-[75vh] w-[65vw] rounded-b-lg`}
        >
          <div>
            <Table columnArr={tableColumns} dataArr={logsData}></Table>
          </div>
          <div className="flex justify-end gap-4">
            <OrderModalButton
              onClick={() => updateStatus("validated")}
              buttonName={"Validate Order"}
            ></OrderModalButton>
            <OrderModalButton
              onClick={() => updateStatus("shipped")}
              buttonName={"Proceed to Shipping"}
            ></OrderModalButton>
            <OrderModalButton
              onClick={() => updateStatus("completed")}
              buttonName={"Complete Order"}
            ></OrderModalButton>
            <OrderModalButton
              onClick={() => updateStatus("cancelled")}
              buttonName={"Cancel Order"}
            ></OrderModalButton>
            <OrderModalButton
              onClick={() => updateStatus("returned")}
              buttonName={"Return Order"}
            ></OrderModalButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsOrderModal;
