import React, { useState, useEffect } from "react";
import {
  UserPlusIcon,
  ArrowsPointingOutIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Table from "../DynamicTable.jsx";
import Overview from "../Overview.jsx";
import DynamicForm from "../DynamicForm.jsx";
import DynamicModal from "../DynamicModal.jsx";
import api from "../../../api";

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

  /////////////////////////// BACKEND
  const fetchProductDetail = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/inventory/view/${props.id}/"
      );
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  
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

  //PROPS FOR <INPUT>
  const formArr = [
    {
      header: "Product ID",
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
  ];

  //DISPLAY TEMPLATE ON <TABLE></TABLE>
  const tableColumns = [
    {
      header: "Product ID",
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
      row: "status",
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
              <div>
                <button
                  onClick={toggleModal}
                  className={`text-white bg-red-600 border-2 border-red-800 rounded-lg px-4 py-2 mx-4 hover:bg-red-700  transition-all duration-100 flex gap-4 items-center`}
                >
                  Create Order
                  <div
                    className={`py-2 px-3 rounded-lg bg-red-700 hover:bg-red-800 transition-all duration-100`}
                  >
                    <UserPlusIcon className="size-5" />
                  </div>
                </button>
              </div>
            </div>

            {/* <DynamicModal modal={modal} toggleModal={toggleModal}>
              <DynamicForm
                error={errorFields}
                btnTitle={btnTitle}
                title={"Inventory"}
                deleteBtn={deleteBtn}
                deleteHandler={deleteHandler}
                deleteBtnTitle={"Delete Product"}
                trashIcon={<TrashIcon className="size-5" />}
                formArr={formArr}
                onSubmit={null}
                defaultValue={rowToEdit !== null ? company[rowToEdit] : ""}
                icon={<UserPlusIcon className="size-5" />}
              />
            </DynamicModal> */}

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
