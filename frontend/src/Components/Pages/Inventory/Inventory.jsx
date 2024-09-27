import React, { useState, useEffect } from "react";
import {
  UserPlusIcon,
  ArrowsPointingOutIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Table from "../DynamicTable.jsx";
import Overview from "../Overview.jsx";
import StockInForm from "./StockInForm.jsx";

export default function Inventory() {
  const [method, setMethod] = useState("");
  const [modal, setModal] = useState(false);

  // MODAL TOGGLE
  const toggleModal = () => {
    setMethod("create");
    setBtnTitle("Create Order");
    setModal((m) => (m = !m));
    setDeleteBtn("inactive");

    if (method === "edit") {
      setRowToEdit(null);
    }
  };

  const [errorWindow, setErrorWindow] = useState(false);

  // ERROR WINDOW TOGGLE
  const toggleErrorWindow = () => {
    setErrorWindow((e) => (e = !e));
  };

  // ERROR TEXT
  const [errors, setErrors] = useState("");
  var errorFields = [];

  // fetch inventory
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/inventory/list?format=json"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch inventory");
      }
      const data = await response.json();
      setInventory(data);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  //DISPLAY TEMPLATE ON <TABLE></TABLE>
  const tableColumns = [
    {
      header: "Inventory ID",
      row: "id",
    },

    {
      header: "Product Name",
      row: "product.product_name",
    },
    {
      header: "Price",
      row: "product.price",
    },
    {
      header: "Product Type",
      row: "product.product_type",
    },

    {
      header: "Vehicle type",
      row: "product.vehicle_type",
    },
    {
      header: "Brand",
      row: "product.brand",
    },
    {
      header: "Status",
      customRender: (item) => {
        if (item.stock === 0) {
          return <p className={`text-orange-500 font-bold`}>INACTIVE</p>;
        } else if (item.stock < item.stock_minimum_threshold) {
          return <p className={`text-yellow-500 font-bold`}>LOW STOCK</p>;
        } else if (item.stock == item.stock_maximum_threshold) {
          return <p className={`text-green-500 font-bold`}>MAX STOCK</p>;
        } else {
          return "Active";
        }
      },
    },
    {
      header: "Quantity",
      row: "stock",
    },
  ];

  const statusChecker = () => {};

  // backend :))))))))))
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (form, callback) => {
    setLoading(true);
  };

  const [deleteBtn, setDeleteBtn] = useState(""); // HANDLES DELETE BUTTON STATE
  const [rowToEdit, setRowToEdit] = useState(null);
  const [rowIdEdit, setRowIdEdit] = useState(null);
  const [btnTitle, setBtnTitle] = useState("Create Order");
  const handleEditRow = (index) => {
    console.log("Editing row:", index); // just for troubleshoot
    toggleModal();
    setRowIdEdit(inventory[index]?.id);
    setRowToEdit(index);
    setMethod("edit");
    setBtnTitle("Edit Inventory");
    setDeleteBtn("active");
  };

  const deleteHandler = () => {
    setMethod("delete");
  };

  // DISPLAY TEMPLATE ON <OVERVIEW></OVERVIEW>
  const overviewArr = [{ title: "Products", quantity: `${inventory.length}` }];

  return (
    <section className={`font-main h-full overflow-hidden`}>
      <div className={`bg-normalGray box-border flex h-full `}>
        <Overview title={`Inventory`} overviewArr={overviewArr} />

        <div className={`flex flex-col flex-1 m-4 `}>
          <div className={`m-4`}>
            <div className={`flex justify-between`}>
              <h1 className={`text-3xl font-bold`}>Inventory</h1>

              <div className="flex mr-24">
                <div className="flex gap-4 mr-32 items-center">
                  <label className="font-bold ">Status</label>
                  <select
                    className={`min-w-[10vw] max-h-4 rounded-lg p-4`}
                  ></select>
                </div>
                <div>
                  <button
                    onClick={toggleModal}
                    className={`text-white bg-red-600 border-2 border-red-800 rounded-lg px-4 py-2 mx-4 hover:bg-red-700  transition-all duration-100 flex gap-4 items-center`}
                  >
                    Stock In
                    <div
                      className={`py-2 px-3 rounded-lg bg-red-700 hover:bg-red-800 transition-all duration-100`}
                    >
                      <UserPlusIcon className="size-5" />
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex gap">
                <button
                  onClick={toggleModal}
                  className={`text-white bg-red-600 border-2 border-red-800 rounded-lg px-4 py-2 mx-4 hover:bg-red-700  transition-all duration-100 flex gap-4 items-center`}
                >
                  Delivery Order
                  <div
                    className={`py-2 px-3 rounded-lg bg-red-700 hover:bg-red-800 transition-all duration-100`}
                  >
                    <UserPlusIcon className="size-5" />
                  </div>
                </button>
                <button
                  onClick={toggleModal}
                  className={`text-white bg-red-600 border-2 border-red-800 rounded-lg px-4 py-2 mx-4 hover:bg-red-700  transition-all duration-100 flex gap-4 items-center`}
                >
                  Walk-In Order
                  <div
                    className={`py-2 px-3 rounded-lg bg-red-700 hover:bg-red-800 transition-all duration-100`}
                  >
                    <UserPlusIcon className="size-5" />
                  </div>
                </button>
              </div>
            </div>

            {/* <StockInForm
              error={errorFields}
              title={"Add Stock"}
              formArr={initialStockIn}
              onSubmit={null}
              defaultValue={rowToEdit !== null ? company[rowToEdit] : ""}
              icon={<UserPlusIcon className="size-5" />}
            /> */}
            <StockInForm />

            <div>
              {errorWindow && (
                <div
                  className={`rounded mt-8 p-4 text-lg font-bold text-red-600  shadow-shadowTable bg-red-200 flex justify-between transition-all`}
                >
                  <h1>
                    <span className="text-red-700">Please fill in the: </span>
                    {errors}
                  </h1>
                  <button
                    onClick={toggleErrorWindow}
                    className={`p-2 hover:text-red-700 text-xl`}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
          <Table
            columnArr={tableColumns}
            dataArr={inventory}
            editRow={handleEditRow}
          />
        </div>
      </div>
    </section>
  );
}
