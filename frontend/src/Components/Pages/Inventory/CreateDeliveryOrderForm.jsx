import React, { useEffect, useState } from "react";

import { ACCESS_TOKEN } from "../../../constants.js";

import Logo from "../../../assets/Logo.png";
import "../../pages.css";
import Table from "../../DynamicComponents/DynamicTable";
import api from "../../../api";
import {
  ChevronDownIcon,
  PlusCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const CreateDeliveryOrderForm = ({ confirmHandler }) => {
  const [initialOrder, setInitialOrder] = useState([]);
  const [accountOptions, setAccountOptions] = useState([]);
  const [employeeOptions, setEmployeeOptions] = useState([]);
  const [productOptions, setProductOptions] = useState([]);

  const token = localStorage.getItem(ACCESS_TOKEN);

  useEffect(() => {
    fetchAccountOptions();
    fetchEmployeeOptions();
    fetchProductOptions();
  }, []);

  const fetchProductOptions = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/product/list?format=json",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProductOptions(data); // ito ung data ng list of Account
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchEmployeeOptions = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/employee/list?format=json",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }
      const data = await response.json();
      setEmployeeOptions(data); // ito ung data ng list of Account
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const fetchAccountOptions = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/account/list?format=json",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch accounts");
      }
      const data = await response.json();
      setAccountOptions(data); // ito ung data ng list of Account
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  const confirmButton = async () => {
    console.log(initialOrder);
    console.log(names);

    // account, employee only taken once
    // product and quantity are many

    // const orderItems = initialOrder.map((item) => ({
    //   account: item.account_id,
    //   employee: item.employee_id,
    //   product: item.product_id,
    //   quantity: item.quantity || 0,
    // }));

    // try {
    //   const res = await api.post("http://127.0.0.1:8000/api/stockin/create", {
    //     orderItems: orderItems,
    //   });

    //   console.log("Stocking in successful:", res.data);
    // } catch (error) {
    //   console.error("Error stocking in:", error);
    //   ``;
    // }

    // window.location.reload();
  };

  const formArr = [
    {
      label: "Quantity",
      name: "quantity",
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
  ];

  //Makes array to OBJECT
  const prepareForm = () => {
    return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
  };

  const [form, setForm] = useState(prepareForm(formArr));
  const initialForm = prepareForm(formArr);

  const onChangeHandler = (e, fieldName, extraData = {}) => {
    const { name, value } = e.target;

    // Update the form state and capture any extra data (like id) in the form

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
      ...extraData,
    }));
  };

  const [names, setNames] = useState([]);

  //SET FORM BACK TO OLD STATE
  const onSubmitHandler = () => {
    const formCopy = { ...form };

    setNames((n) => [...n, formCopy.account]);
    setNames((n) => [...n, formCopy.account_id]);
    setNames((n) => [...n, formCopy.employee_name]);
    setNames((n) => [...n, formCopy.employee_id]);

    delete form.employee_name;
    delete form.account;

    setInitialOrder((prevOrder) => {
      const updatedOrder = [...prevOrder, form]; // Update order
      setForm(initialForm); // Reset the form
      console.log(updatedOrder); // This will now correctly log the updated order
      return updatedOrder; // Return updated state
    });
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
            <form onSubmit={confirmHandler} className={`min-w-[70vw] `}>
              <div className={`bg-gray-100 py-10 px-8 h-[80vh]  rounded-b-lg`}>
                <h1 className="font-bold text-2xl mb-10">
                  Create Order Delivery
                </h1>
                <div className={`ml-4 gap-x-6 gap-y-8 flex min-w-[40vw]`}>
                  {/* ACCOUNT SELECTION */}
                  <div className={`flex justify-center relative min-w-[300px]`}>
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
                      <option value="" disabled>
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
                  </div>
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
                      <option value="" disabled>
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
                          })
                        }
                        name="product_name"
                        defaultValue={``}
                      >
                        <option value="" disabled>
                          Select A Product
                        </option>
                        {productOptions.map((option) => (
                          <option
                            key={option.id}
                            value={option.product_name}
                            data-id={option.id}
                          >
                            {`${option.product_name}`}
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
                    Confirm Delivery Order
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

export default CreateDeliveryOrderForm;
