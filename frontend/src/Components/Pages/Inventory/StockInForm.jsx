import React, { useEffect, useState } from "react";

import { ACCESS_TOKEN } from "../../../constants.js"; 

import Logo from "../../../assets/Logo.png";
import "../../pages.css";
import Table from "../../DynamicComponents/DynamicTable";
import api from "../../../api";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const StockInForm = ({ confirmHandler }) => {
  const [initialStockIn, setInitialStockIn] = useState([]);
  const [productOptions, setProductOptions] = useState([]);
  const [supplier, setSupplier] = useState([]);

  const token = localStorage.getItem(ACCESS_TOKEN); 

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/inventory/list?format=json", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`, 
            "Content-Type": "application/json" 
          }
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProductOptions(data); // ito ung data ng list of products (product)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchSupplier();
  }, []);

  const fetchSupplier = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/supplier/list?format=json", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`, 
            "Content-Type": "application/json" 
          }
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch supplier");
      }
      const data = await response.json();
      setSupplier(data);
    } catch (error) {
      console.error("Error fetching supplier:", error);
    }
  };

  const formArr = [
    {
      label: "Minimum Threshold",
      name: "stock_minimum_threshold",
    },
    {
      label: "Quantity",
      name: "quantity",
    },
  ];
  const tableColumns = [
    {
      header: "Product Name",
      row: "product_name",
    },
    {
      header: "Supplier Name",
      row: "supplier_name",
    },
    {
      header: "Minimum Threshold",
      row: "stock_minimum_threshold",
    },
    {
      header: "Quantity to add",
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

  //SET FORM BACK TO OLD STATE
  const onSubmitHandler = () => {
    setInitialStockIn((prevStock) => {
      const updatedStock = [...prevStock, form]; // Update stock
      setForm(initialForm); // Reset the form
      console.log(updatedStock); // This will now correctly log the updated stock
      return updatedStock; // Return updated state
    });
  };

  // send data to database
  const confirmButton = async () => {
    console.log(initialStockIn);

    const inboundStockItems = initialStockIn.map((stockInItem) => ({
      inventory: stockInItem.inventory_id, // Assuming this is the inventory ID
      supplier: stockInItem.supplier_id, // Assuming this is the supplier ID
      quantity: stockInItem.quantity || 0, // Ensure quantity is not empty
    }));

    try {
      const res = await api.post("http://127.0.0.1:8000/api/stockin/create", {
        inboundStockItems: inboundStockItems,
      });

      console.log("Stocking in successful:", res.data);
    } catch (error) {
      console.error("Error stocking in:", error);
      ``;
    }

    window.location.reload();
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
            <form onSubmit={confirmHandler} className={`min-w-[65vw] `}>
              <div className={`bg-gray-100 py-10 px-8 h-[75vh]  rounded-b-lg`}>
                <h1 className="font-bold text-2xl mb-10">Stock In</h1>
                <div className="mb-12 ml-4 min-h-[40vh] max-h-[40vh] overflow-hidden">
                  <Table columnArr={tableColumns} dataArr={initialStockIn} />
                </div>
                <div className={`gap-x-6 gap-y-8 flex flex-wrap `}>
                  <div className="flex items-center gap-4">
                    {/* PRODUCT SELECT */}
                    <label className="font-bold">Product</label>
                    <div className={`flex justify-center relative`}>
                      <select
                        className=" appearance-none shadow-shadowTable text-lg min-w-[10vw] min-h-6 p-2 w-full rounded-md border-2"
                        required
                        onChange={(e) =>
                          onChangeHandler(e, "product_name", {
                            inventory_id:
                              e.target.selectedOptions[0].getAttribute(
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
                            value={option.product.product_name}
                            data-id={option.id}
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
                    <label className="font-bold">Supplier</label>
                    <div className={`flex justify-center relative`}>
                      <select
                        className="appearance-none shadow-shadowTable text-lg min-w-[10vw] min-h-6 p-2 w-full rounded-md border-2"
                        required
                        onChange={(e) =>
                          onChangeHandler(e, "supplier_name", {
                            supplier_id:
                              e.target.selectedOptions[0].getAttribute(
                                "data-id"
                              ),
                          })
                        }
                        name="supplier_name"
                        defaultValue={``}
                      >
                        <option value="" disabled>
                          Select A Supplier
                        </option>
                        {supplier.map((sup) => (
                          <option
                            key={sup.id}
                            value={sup.supplier_name}
                            data-id={sup.id}
                          >
                            {`${sup.supplier_name}`}
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
                    Add Product to Stock In
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
                    Confirm Stock-In
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

export default StockInForm;
