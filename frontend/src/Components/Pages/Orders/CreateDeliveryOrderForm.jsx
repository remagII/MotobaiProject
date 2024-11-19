import React, { useState } from "react";
import Logo from "../../../assets/Logo.png";
import "../../pages.css";
import Table from "../../DynamicComponents/DynamicTable";
import api from "../../../api";
import {
  ChevronDownIcon,
  PlusCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

import { useFetchData } from "../../Hooks/useFetchData.js";

const CreateDeliveryOrderForm = ({ confirmHandler }) => {
  const [initialOrder, setInitialOrder] = useState([]);

  const { data: productOptions } = useFetchData("inventory");
  const { data: employeeOptions } = useFetchData("employee");
  const { data: accountOptions } = useFetchData("account");

  const [selectedAccount, setSelectedAccount] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const confirmButton = async () => {
    const total_balance = totalPrice.toFixed(2);
    console.log(total_balance);

    if (initialOrder.length > 0) {
      if (!selectedAccount || !form.employee_name) {
        alert("Please select an account and employee.");
        return;
      }

      const orderItems = initialOrder.map((item) => ({
        inventory: parseInt(item.id, 10),
        quantity: parseInt(item.quantity, 10) || 0,
        product_price: parseFloat(item.product_price),
      }));

      try {
        const res = await api.post("http://127.0.0.1:8000/api/order/create/", {
          order_details: orderItems,
          order_type: "Delivery",
          account: selectedAccount,
          employee: selectedEmployee,
          total_balance: total_balance,
        });
        console.log("Order creation successful:", res.data);
        setInitialOrder([]);
      } catch (error) {
        console.error("Error Creating Order:", error);
      }
    } else {
      alert("Please add at least one (1) product");
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
    const { value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: value,
      ...extraData,
    }));

    if (fieldName === "account") {
      setSelectedAccount(extraData.account_id);
    } else if (fieldName === "employee_name") {
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

    if (form.quantity && form.product_name) {
      setInitialOrder((prevOrder) => {
        const updatedOrder = [...prevOrder, form]; // Update order
        setForm((prevForm) => ({
          ...initialForm, // Reset other fields
          employee_name: prevForm.employee_name, // Retain employee_name
          employee_id: prevForm.employee_id, // Retain employee_id
        }));
        console.log(updatedOrder); // This will now correctly log the updated order
        return updatedOrder; // Return updated state
      });
    }
  };

  const validateInput = (field, options, fieldName) => {
    // Normalize input and options for comparison
    const inputValue = (form[field]?.trim() || "").toLowerCase();
    const isValid = options.some(
      (option) => option[fieldName].trim().toLowerCase() === inputValue
    );

    if (!isValid) {
      setForm((prevForm) => ({
        ...prevForm,
        [field]: "",
        [`${field}_id`]: null,
      }));
      alert(`Please input the correct ${fieldName.replace("_", " ")}`);
    }
  };

  const [searchInput, setSearchInput] = useState("");

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
              <div className={`bg-gray-100 py-10 px-8 h-full rounded-b-lg`}>
                <h1 className="font-bold text-2xl mb-10">
                  Create Order Delivery
                </h1>
                <div className={`ml-4 gap-x-6 gap-y-8 flex min-w-[40vw]`}>
                  {/* ACCOUNT SELECTION */}
                  <div className={`flex justify-center relative  gap-4`}>
                    <label className="font-bold">Account</label>
                    <div className={`flex justify-center relative`}>
                      <div className={`border-2 rounded-md`}>
                        <input
                          placeholder="Search for Account"
                          autoComplete="off"
                          className="text-lg p-2 min-w-[350px]"
                          type="text"
                          onChange={(e) =>
                            onChangeHandler(e, "account", {
                              account_id:
                                accountOptions.find(
                                  (item) => item.account === e.target.value
                                ) || null,
                            })
                          }
                          onBlur={() => {
                            if (form.account) {
                              validateInput(
                                "account",
                                accountOptions,
                                "account"
                              );
                            }
                          }}
                          name="account"
                          value={form.account || ""}
                        />
                        <div
                          className={`flex flex-col absolute bg-gray-50 overflow-y-auto max-h-[180px] min-w-[450px] shadow-md rounded-md z-50`}
                        >
                          {accountOptions
                            .filter((item) => {
                              const searchTerm = (
                                form.account || ""
                              ).toLowerCase();
                              const fullName = item.account.toLowerCase();

                              return (
                                searchTerm &&
                                fullName.startsWith(searchTerm) &&
                                fullName !== searchTerm
                              );
                            })
                            .map((item) => {
                              return (
                                <div
                                  onMouseDown={(e) => {
                                    e.preventDefault();
                                  }}
                                  onClick={() => {
                                    setForm({
                                      ...form,
                                      account: item.account,
                                      account_id: item.id,
                                    });
                                  }}
                                  data-id={item.id}
                                  key={item.id}
                                  className={`hover:bg-red-700 hover:text-white p-4 rounded-sm transition-all duration-100 cursor-pointer`}
                                >
                                  {item.account}
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      <div>
                        <ChevronDownIcon
                          className={` size-4 h-full mr-2  absolute flex right-0 items-center justify-center`}
                        />
                      </div>
                    </div>
                  </div>
                  {/* EMPLOYEE SELECTION */}
                  <label className="font-bold ">Employee</label>
                  <div className={`flex justify-center relative`}>
                    <div className={`border-2 rounded-md`}>
                      <input
                        autoComplete="off"
                        placeholder="Search for Employee"
                        className="text-lg p-2 min-w-[350px]"
                        type="text"
                        onChange={(e) => {
                          setSearchInput(e.target.value); // Update the search input value
                        }}
                        onBlur={() => {
                          // Validate the input only if the user hasn't selected from the dropdown
                          const matchedEmployee = employeeOptions.find(
                            (employee) => {
                              const fullName = [
                                employee.first_name,
                                employee.middle_name,
                                employee.last_name,
                              ]
                                .join(" ")
                                .toLowerCase();
                              return fullName === searchInput.toLowerCase();
                            }
                          );

                          if (!matchedEmployee) {
                            alert("Please select a valid employee.");
                            setSearchInput(""); // Reset input
                            setForm({
                              ...form,
                              employee_name: "",
                              employee_id: null,
                            });
                            setSelectedEmployee(null);
                          }
                        }}
                        name="employee_name"
                        value={searchInput} // Bind to the search input state
                      />
                      <div
                        className={`flex flex-col absolute bg-gray-50 overflow-y-auto max-h-[180px] min-w-[450px] shadow-md rounded-md z-50`}
                      >
                        {employeeOptions
                          .filter((employee) => {
                            const searchTerm = searchInput.toLowerCase();
                            const fullName = [
                              employee.first_name,
                              employee.middle_name,
                              employee.last_name,
                            ]
                              .join(" ")
                              .toLowerCase();

                            return (
                              searchTerm &&
                              fullName.startsWith(searchTerm) &&
                              fullName !== searchTerm
                            );
                          })
                          .map((employee) => (
                            <div
                              key={employee.id}
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => {
                                // Update the form when an option is clicked
                                setForm({
                                  ...form,
                                  employee_name: [
                                    employee.first_name,
                                    employee.middle_name,
                                    employee.last_name,
                                  ].join(" "),
                                  employee_id: employee.id,
                                });
                                setSelectedEmployee(employee.id); // Update state
                                setSearchInput(
                                  [
                                    employee.first_name,
                                    employee.middle_name,
                                    employee.last_name,
                                  ].join(" ")
                                ); // Set the input value to the selected employee
                              }}
                              className={`hover:bg-red-700 hover:text-white p-4 rounded-sm transition-all duration-100 cursor-pointer`}
                            >
                              {employee.first_name} {employee.middle_name}{" "}
                              {employee.last_name}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-12 ml-4 min-h-[40vh] max-h-[40vh] overflow-y-hidden">
                  <Table
                    columnArr={tableColumns}
                    dataArr={initialOrder}
                    className={`!max-h-[40vh]`}
                    sortField={null}
                    sortDirection="asc"
                  />
                </div>
                <div className={`gap-x-6 gap-y-8 flex flex-wrap `}>
                  <div className="flex items-center gap-4">
                    {/* PRODUCT SELECT */}
                    <label className="font-bold">Product</label>
                    <div className={`flex justify-center relative`}>
                      <div className={`border-2 rounded-md`}>
                        <input
                          autoComplete="off"
                          placeholder="Search for Product"
                          className="text-lg p-2 min-w-[350px]"
                          type="text"
                          onChange={(e) => {
                            const selectedProduct = productOptions.find(
                              (item) =>
                                item.product.product_name.toLowerCase ===
                                e.target.value.toLowerCase
                            );
                            console.log("Selected Product:", selectedProduct);

                            onChangeHandler(e, "product_name", {
                              inventory_id: selectedProduct
                                ? selectedProduct.product.id
                                : null,
                              product_price: selectedProduct
                                ? selectedProduct.product.product_price
                                : null,
                            });
                          }}
                          onBlur={() => {
                            if (form.product_name) {
                              validateInput(
                                "product_name",
                                productOptions.map((item) => ({
                                  product_name: item.product.product_name,
                                })), // Flatten options to match the expected structure
                                "product_name"
                              );
                            }
                          }}
                          name="product_name"
                          value={form.product_name || ""}
                        />
                        <div
                          className={`flex flex-col absolute bg-gray-50 overflow-y-auto max-h-[180px] min-w-[450px] shadow-md rounded-md z-50`}
                        >
                          {productOptions
                            .filter((item) => {
                              const searchTerm = (
                                form.product_name || ""
                              ).toLowerCase();
                              const fullName =
                                item.product.product_name.toLowerCase();

                              return (
                                searchTerm &&
                                fullName.startsWith(searchTerm) &&
                                fullName !== searchTerm
                              );
                            })
                            .map((item) => {
                              return (
                                <div
                                  onMouseDown={(e) => e.preventDefault()}
                                  onClick={() =>
                                    setForm({
                                      ...form,
                                      product_name: item.product.product_name,
                                      product_price: item.product.product_price,
                                      inventory_id: item.product.id,
                                    })
                                  }
                                  data-id={item.product.id}
                                  key={item.product.id}
                                  className={`hover:bg-red-700 hover:text-white p-4 rounded-sm transition-all duration-100 cursor-pointer`}
                                >
                                  {item.product.product_name}
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      <div>
                        <ChevronDownIcon
                          className={` size-4 h-full mr-2  absolute flex right-0 items-center justify-center`}
                        />
                      </div>
                    </div>
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
                        onChange={(e) => onChangeHandler(e, name)}
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
