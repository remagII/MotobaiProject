import React, { useState, useEffect } from "react";
import Logo from "../../../assets/Logo.png";
import Table from "../../DynamicComponents/DynamicTable";
import api from "../../../api";
import {
  ChevronDownIcon,
  PlusCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useFetchData } from "../../Hooks/useFetchData.js";

const StockInForm = ({ confirmHandler }) => {
  const [successWindow, setSuccessWindow] = useState(false);
  const toggleSuccessWindow = () => {
    setSuccessWindow((e) => (e = !e));
  };

  const [successMethod, setSuccessMethod] = useState("");

  useEffect(() => {
    if (successWindow) {
      const timer = setTimeout(() => {
        setSuccessWindow(false);
      }, 2000); // Closes the error window after 2.5 seconds

      return () => clearTimeout(timer); // Cleanup if component unmounts
    }
  }, [successWindow]);

  const [initialStockIn, setInitialStockIn] = useState([]);

  const { data: productOptions } = useFetchData("inventory");
  const { data: supplierOptions } = useFetchData("supplier");

  const formArr = [
    {
      label: "Quantity",
      name: "quantity",
      type: "number",
    },
    {
      label: "Reference #",
      name: "reference_number",
      type: "number",
    },
  ];
  const tableColumns = [
    {
      header: "Product Name",
      row: "product_name",
    },
    {
      header: "Reference #",
      row: "reference_number",
    },
    {
      header: "Quantity to add",
      row: "quantity",
    },
  ];

  //Makes array to OBJECT
  const prepareForm = () => {
    return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {
      product_name: "",
      supplier_name: "",
      reference_number: "",
    });
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
  };

  //SET FORM BACK TO OLD STATE
  const onSubmitHandler = () => {
    if (form && form.quantity && form && form.product_name) {
      setInitialStockIn((prevStock) => {
        const updatedStock = [...prevStock, form]; // Update stock
        setForm(initialForm); // Reset the form
        console.log(updatedStock); // This will now correctly log the updated stock
        return updatedStock; // Return updated state
      });
    }
  };

  // send data to database
  const confirmButton = async () => {
    console.log(initialStockIn);
    // setSupplier(1); // test
    // setEmployee(1); // test

    if (initialStockIn.length > 0) {
      const inboundStockItems = initialStockIn.map((stockInItem) => ({
        inventory: stockInItem.inventory_id,
        quantity: stockInItem.quantity || 0,
      }));

      try {
        const res = await api.post(
          "http://127.0.0.1:8000/api/stockin/create/",
          {
            inboundStockItems: inboundStockItems,
            supplier: 1, // replace later
            employee: 1,
          }
        );

        console.log("Stocking in successful:", res.data);
        setSuccessMethod("Added");
        toggleSuccessWindow();
        setInitialStockIn([]);
        console.log(initialStockIn);
      } catch (error) {
        console.error("Error stocking in:", error);
        ``;
      }
    } else {
      alert("Please add atleast one(1) item");
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
            <form onSubmit={confirmHandler} className={`min-w-[70vw]`}>
              <div className={`bg-gray-100 py-10 px-8 h-[87vh]  rounded-b-lg`}>
                <h1 className="font-bold text-2xl mb-10">Stock In</h1>
                <div className={`flex gap-4 items-center mb-4`}>
                  <label className="font-bold">Supplier</label>
                  <div className={`flex justify-center relative`}>
                    <div className={`border-2 rounded-md`}>
                      <input
                        placeholder="Search for Supplier"
                        autoComplete="off"
                        className="text-lg p-2 min-w-[350px]"
                        type="text"
                        onChange={(e) =>
                          onChangeHandler(e, "supplier_name", {
                            supplier_id:
                              supplierOptions.find(
                                (item) => item.supplier_name === e.target.value
                              ) || null,
                          })
                        }
                        onBlur={() => {
                          if (form.supplier_name) {
                            validateInput(
                              "supplier_name",
                              supplierOptions,
                              "supplier_name"
                            );
                          }
                        }}
                        name="supplier_name"
                        value={form.supplier_name || ""}
                      />
                      <div
                        className={`flex flex-col absolute bg-gray-50 overflow-y-auto max-h-[180px] min-w-[450px] shadow-md rounded-md z-50`}
                      >
                        {supplierOptions
                          .filter((item) => {
                            const searchTerm = (
                              form.supplier_name || ""
                            ).toLowerCase();
                            const fullName = item.supplier_name.toLowerCase();

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
                                    supplier_name: item.supplier_name,
                                    supplier_id: item.id,
                                  });
                                }}
                                data-id={item.id}
                                key={item.id}
                                className={`hover:bg-red-700 hover:text-white p-4 rounded-sm transition-all duration-100 cursor-pointer`}
                              >
                                {item.supplier_name}
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
                <div className="mb-12 ml-4 min-h-[40vh] h-[42vh] overflow-y-hidden">
                  <Table
                    columnArr={tableColumns}
                    dataArr={initialStockIn}
                    className={`!max-h-[40vh]`}
                    sortField={null}
                    sortDirection="asc"
                  />
                </div>
                <div className={`gap-x-6 gap-y-8 flex flex-wrap `}>
                  <div className="flex items-center gap-4">
                    <label className="font-bold">Product</label>
                    <div className={`flex justify-center relative`}>
                      <div className={`border-2 rounded-md`}>
                        <input
                          autoComplete="off"
                          placeholder="Search for Product"
                          className="text-lg p-2 min-w-[350px]"
                          type="text"
                          onChange={(e) =>
                            onChangeHandler(e, "product_name", {
                              inventory_id:
                                productOptions.find(
                                  (item) =>
                                    item.product.product_name === e.target.value
                                ) || null,
                            })
                          }
                          onBlur={() => {
                            if (form.product_name) {
                              validateInput(
                                "product_name",
                                productOptions,
                                "product_name"
                              );
                            }
                          }}
                          name="product_name"
                          value={form.product_name || ""}
                        />
                        <div
                          className={`flex flex-col absolute bg-gray-50 overflow-y-auto max-h-[180px] min-w-[450px] shadow-md rounded-md`}
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
                        min="1"
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
                    Confirm Stock-In
                    <CheckCircleIcon className={`size-6`} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute z-20 top-20  left-1/2 transform -translate-x-1/2">
        {successWindow && (
          <div
            className={`rounded p-4 text-lg font-bold text-green-600 bg-green-200 flex justify-between  transition-all w-[30vw] shadow-2xl`}
          >
            <h1>
              <span className="text-green-700">
                Successfully {successMethod}!
              </span>
            </h1>
            <button
              onClick={toggleSuccessWindow}
              className={`p-2 hover:text-green-700 text-xl`}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default StockInForm;
