import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Logo.png";
import "../../pages.css";
import Table from "../../DynamicComponents/DynamicTable.jsx";
import api from "../../../api.js";
import {
  ChevronDownIcon,
  PlusCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

import { useFetchData } from "../../Hooks/useFetchData.js";

const CreateWalkinOrderForm = ({ confirmHandler }) => {
  const [initialOrder, setInitialOrder] = useState([]);

  const { data: productOptions } = useFetchData("inventory");
  const { data: employeeOptions } = useFetchData("employee");
  // const { data: accountOptions } = useFetchData("account");

  // const [selectedAccount, setSelectedAccount] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const confirmButton = async () => {
    if (initialOrder.length > 0) {
      // if (!selectedAccount || !selectedEmployee) {
      //   alert("Please select an account and employee.");
      //   return;
      // }

      const orderItems = initialOrder.map((item) => ({
        inventory: parseInt(item.id, 10),
        quantity: parseInt(item.quantity, 10) || 0,
      }));

      try {
        const res = await api.post("http://127.0.0.1:8000/api/order/create/", {
          order_details: orderItems,
          order_type: "Walkin",
          // account: selectedAccount,
          employee: selectedEmployee,
        });
        console.log("Order creation successful:", res.data);
        setInitialOrder([]);
      } catch (error) {
        console.error("Error Creating Order:", error);
        ``;
      }
    } else {
      alert("Please add atlesast one(1) product");
    }
  };

  const formArr = [
    {
      label: "Quantity",
      name: "quantity",
      type: "number",
    },
  ];

  const tableColumns = [
    {
      header: "Product ID",
      row: "id",
    },

    {
      header: "Product Name",
      row: "product_name",
    },
    {
      header: "Quantity",
      row: "quantity",
    },
    {
      header: "Unit Price",
      row: "product_price",
    },
    {
      header: "Total Price",
      customRender: (item) => {
        return <p>{(item.quantity * item.product_price).toFixed(2)}</p>;
      },
    },
  ];

  //Makes array to OBJECT
  const prepareForm = () => {
    return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
  };

  const [form, setForm] = useState(prepareForm(formArr));
  const initialForm = prepareForm(formArr);

  const onChangeHandler = (e, fieldName, extraData = {}) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
      ...extraData,
    }));

    if (fieldName === "account") {
      // setSelectedAccount(extraData.account_id);
    } else if (fieldName === "first_name") {
      setSelectedEmployee(extraData.employee_id);
    }
  };

  let totalPrice = 0;
  const allPrices = initialOrder;

  allPrices.forEach((item) => {
    totalPrice += item.product_price * item.quantity;
  });

  //SET FORM BACK TO OLD STATE
  const onSubmitHandler = () => {
    delete form.account_id;
    delete form.employee_id;

    if (form && form.quantity && form && form.product_name) {
      setInitialOrder((prevOrder) => {
        const updatedOrder = [...prevOrder, form]; // Update order
        setForm(initialForm); // Reset the form
        console.log(updatedOrder); // This will now correctly log the updated order
        return updatedOrder; // Return updated state
      });
    }
  };

  return (
    <section>
      <div>
        <div>
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
            <form onSubmit={confirmHandler} className={`min-w-[80vw] `}>
              <div className={`bg-gray-100 py-10 px-8 h-[80vh]  rounded-b-lg`}>
                <h1 className="font-bold text-2xl mb-10">
                  Create Walk-In Order
                </h1>
                <div className={`ml-4 gap-x-6 gap-y-8 flex min-w-[40vw]`}>
                  {/* ACCOUNT SELECTION */}
                  {/* <div className={`flex justify-center relative min-w-[300px]`}>
                    <select
                      className="overflow-y-auto appearance-none shadow-shadowTable text-lg min-w-[10vw] min-h-6 p-2 w-full rounded-md border-2"
                      required
                      onChange={(e) =>
                        onChangeHandler(e, "account", {
                          account_id:
                            e.target.selectedOptions[0].getAttribute("data-id"),
                        })
                      }
                      name="account"
                      defaultValue={``}
                    >
                      <option value={form.account || ""} disabled>
                        Select an Account
                      </option>
                      {accountOptions.map((option) => (
                        <option
                          key={option.id}
                          value={option.account}
                          data-id={option.id}
                        >
                          {`${option.account}`}
                        </option>
                      ))}
                    </select>
                    <div>
                      <ChevronDownIcon
                        className={` size-4 h-full mr-2  absolute flex right-0 items-center justify-center`}
                      />
                    </div>
                  </div> */}
                  {/* EMPLOYEE SELECTION */}
                  <div className={`flex justify-center relative min-w-[300px]`}>
                    <select
                      className="overflow-y-auto appearance-none shadow-shadowTable text-lg min-w-[10vw] min-h-6 p-2 w-full rounded-md border-2"
                      required
                      onChange={(e) =>
                        onChangeHandler(e, "first_name", {
                          employee_id:
                            e.target.selectedOptions[0].getAttribute("data-id"),
                        })
                      }
                      name="employee_name"
                      defaultValue={``}
                    >
                      <option value={form.employee_name || ""} disabled>
                        Select an Employee
                      </option>
                      {employeeOptions.map((option) => (
                        <option
                          key={option.id}
                          value={`${option.first_name} ${option.last_name}`}
                          data-id={option.id}
                        >
                          {`${option.first_name} ${option.last_name}`}
                        </option>
                      ))}
                    </select>
                    <div>
                      <ChevronDownIcon
                        className={` size-4 h-full mr-2  absolute flex right-0 items-center justify-center`}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-12 ml-4 min-h-[40vh] max-h-[40vh] overflow-y-hidden">
                  <Table
                    columnArr={tableColumns}
                    dataArr={initialOrder}
                    className={`!max-h-[40vh]`}
                  />
                </div>
                <div className={`gap-x-6 gap-y-8 flex flex-wrap `}>
                  <div className="flex items-center gap-4">
                    {/* PRODUCT SELECT */}
                    <label className="font-bold">Product</label>
                    <div
                      className={`flex justify-center relative min-w-[300px]`}
                    >
                      <select
                        className="overflow-y-auto appearance-none shadow-shadowTable text-lg min-w-[10vw] min-h-6 p-2 w-full rounded-md border-2"
                        required
                        onChange={(e) =>
                          onChangeHandler(e, "product_name", {
                            id: e.target.selectedOptions[0].getAttribute(
                              "data-id"
                            ),
                            product_price:
                              e.target.selectedOptions[0].getAttribute(
                                "product_price"
                              ),
                          })
                        }
                        name="product_name"
                        value={form.product_name || ""}
                      >
                        <option value="" disabled>
                          Select A Product
                        </option>
                        {productOptions.map((option) => (
                          <option
                            key={option.product.id}
                            value={option.product.product_name}
                            data-id={option.product.id}
                            product_price={option.product.price}
                          >
                            {`${option.product.product_name}`}
                          </option>
                        ))}
                      </select>
                      <div>
                        <ChevronDownIcon
                          className={` size-4 h-full mr-2  absolute flex right-0 items-center justify-center`}
                        />
                      </div>
                    </div>
                    {/* SUPPLIER SELECT */}
                    <div className={`flex justify-center relative`}>
                      <div>
                        <ChevronDownIcon
                          className={` size-4 h-full mr-2  absolute flex right-0 items-center justify-center`}
                        />
                      </div>
                    </div>
                  </div>
                  {formArr.map(({ label, name, type, readOnly }, index) => (
                    <div
                      className={`flex flex-col justify-between`}
                      key={index}
                    >
                      <input
                        className={`text-base border-2 rounded py-2 px-4 focus:border-green-600 focus:ring-0 focus:outline-none shadow-sm`}
                        readOnly={readOnly}
                        label={label}
                        id={name}
                        name={name}
                        type={type}
                        value={form[name] || ""}
                        onChange={(e) => onChangeHandler(e)}
                        required
                      ></input>
                      <label
                        className={`absolute transition-all duration-100 ease-in  px-4 py-2 label-line text-gray-600 label-line`}
                        htmlFor={name}
                      >
                        {label}
                      </label>
                    </div>
                  ))}
                  <div className="ml-44 mt-2">
                    <span className=" text-xl">{`TOTAL PRICE: `}</span>
                    <span className="text-2xl font-bold">{`${totalPrice.toFixed(
                      2
                    )}`}</span>
                  </div>
                </div>
                <div className={`flex justify-end gap-4 mt-12`}>
                  {/* CREATE ROW BUTTON */}
                  <button
                    onClick={(e) => {
                      onSubmitHandler();
                    }}
                    type="submit"
                    className={`shadow-md bg-white border-2 border-red-700 rounded px-4 py-2 hover:bg-red-700 hover:text-white transition-all duration-100 flex gap-4 items-center`}
                  >
                    Add Product to Order
                    <PlusCircleIcon className={`size-6`} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      {
                        confirmButton();
                      }
                    }}
                    className={` shadow-md bg-white border-2 border-red-700 rounded px-4 py-2 hover:bg-red-700 hover:text-white transition-all duration-100 flex gap-4 items-center `}
                  >
                    Confirm Walk-In Order
                    <CheckCircleIcon className={`size-6`} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateWalkinOrderForm;
