import React, { useState, useEffect } from "react";

import {
  UserPlusIcon,
  ArrowDownTrayIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Table from "../DynamicTable.jsx";
import Overview from "../Overview.jsx";
import DynamicForm from "../DynamicForm.jsx";
import DynamicModal from "../DynamicModal.jsx";
import api from "../../../api";

const Suppliers = () => {
  const [method, setMethod] = useState("");
  const [modal, setModal] = useState(false);

  // MODAL TOGGLE
  const toggleModal = () => {
    setMethod("create");
    setBtnTitle("Create Supplier");
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
  // fetch supplier
  const [supplier, setSupplier] = useState([]);

  useEffect(() => {
    fetchSupplier();
  }, []);

  const fetchSupplier = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/supplier/list?format=json"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch supplier");
      }
      const data = await response.json();
      setSupplier(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  //PROPS FOR <INPUT>
  const formArr = [
    {
      label: "Supplier Name",
      name: "supplier_name",
    },

    {
      label: "Phone Number",
      name: "phone_number",
    },
    {
      label: "Description",
      name: "description",
    },
  ];

  //DISPLAY TEMPLATE ON <TABLE></TABLE>

  const tableColumns = [
    {
      header: "Supplier Name",
      row: "supplier_name",
    },

    {
      header: "Phone Number",
      row: "phone_number",
    },
    {
      header: "Description",
      row: "description",
    },
  ];

  // DISPLAY TEMPLATE ON <OVERVIEW></OVERVIEW>
  const overviewArr = [{ title: "Suppliers", quantity: `${supplier.length}` }];

  /////////////////////////////////////////////////////////// BACKEND

  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (form, callback) => {
    setLoading(true);
    if (method === "create") {
      console.log("create method");
      ////////////////////////////////////////// CODE FOR SAVING DATA
      if (rowToEdit === null) {
        try {
          const res = await api.post(
            "http://127.0.0.1:8000/api/supplier/create",
            {
              supplier_name: form.supplier_name,
              phone_number: form.phone_number,
              description: form.description,
            }
          );

          window.location.reload();
          {
            errorWindow ? toggleErrorWindow() : "";
          }
          callback();
          toggleModal();
        } catch (error) {
          setRowToEdit(null);
          errorFields = [];
          toggleModal();
          for (const [key, value] of Object.entries(form)) {
            if (!value) {
              errorFields.push(key);
            }
          }
          setErrors((e) => errorFields.join(", "));
          {
            !errorWindow ? toggleErrorWindow() : "";
          }
          callback();
        } finally {
          setLoading(false);
        }
      }
    } else if (method === "edit") {
      console.log(`edit method, id: ` + rowIdEdit);
      ////////////////////////////////////////// CODE FOR EDITING DATA
      try {
        const res = await api.put(
          `http://127.0.0.1:8000/api/supplier/update/${rowIdEdit}`,
          {
            supplier_name: form.supplier_name,
            phone_number: form.phone_number,
            description: form.description,
          }
        );
        window.location.reload();
        {
          errorWindow ? toggleErrorWindow() : "";
        }
      } catch (error) {
        setRowToEdit(null);
        errorFields = [];
        toggleModal();
        for (const [key, value] of Object.entries(form)) {
          if (!value) {
            errorFields.push(key);
          }
        }
        setErrors((e) => errorFields.join(", "));
        {
          !errorWindow ? toggleErrorWindow() : "";
        }
        callback();
      } finally {
        setLoading(false);
        setRowIdEdit(null);
      }

      callback();
    } else if (method === "delete") {
      // rename rowIdEdit to rowIdSelected or smth similar
      try {
        const res = await api.delete(
          `http://127.0.0.1:8000/api/supplier/delete/${rowIdEdit}`
        );
        console.log("product deleted.");
      } catch (error) {
        // feel free to change here
        console.log(error);
      } finally {
        setLoading(false);
        setRowIdEdit(null); // ito ung delete id
      }
    }
  };

  const [deleteBtn, setDeleteBtn] = useState(""); // HANDLES DELETE BUTTON STATE
  const [rowToEdit, setRowToEdit] = useState(null);
  const [rowIdEdit, setRowIdEdit] = useState(null);
  const [btnTitle, setBtnTitle] = useState("Create Supplier");
  const handleEditRow = (index) => {
    toggleModal();
    setRowIdEdit(supplier[index]?.id);
    setRowToEdit(index);
    setMethod("edit");
    setBtnTitle("Edit Supplier");
    setDeleteBtn("active");
  };

  const deleteHandler = () => {
    setMethod("delete");
  };

  return (
    <section className={`font-main h-full overflow-hidden`}>
      <div className={`bg-normalGray box-border flex h-full `}>
        <Overview overviewArr={overviewArr} />

        <div className={`flex flex-col flex-1 m-4 `}>
          <div className={`m-4`}>
            <div className={`flex justify-between`}>
              <h1 className={`text-3xl font-bold`}>Suppliers</h1>
              <div>
                <button
                  onClick={toggleModal}
                  className={`text-white bg-red-600 border-2 border-red-800 rounded-lg px-4 py-2 mx-4 hover:bg-red-700  transition-all duration-100 flex gap-4 items-center`}
                >
                  Create Supplier
                  <div
                    className={`py-2 px-3 rounded-lg bg-red-700 hover:bg-red-800 transition-all duration-100`}
                  >
                    <ArrowDownTrayIcon className="size-5" />
                  </div>
                </button>
              </div>
            </div>

            <DynamicModal modal={modal} toggleModal={toggleModal}>
              <DynamicForm
                error={errorFields}
                btnTitle={btnTitle}
                title={"Supplier"}
                deleteBtn={deleteBtn}
                deleteHandler={deleteHandler}
                deleteBtnTitle={"Delete Supplier"}
                trashIcon={<TrashIcon className="size-5" />}
                formArr={formArr}
                onSubmit={onSubmitHandler}
                defaultValue={rowToEdit !== null ? supplier[rowToEdit] : ""}
                icon={<ArrowDownTrayIcon className="size-5" />}
              />
            </DynamicModal>

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
            dataArr={supplier}
            editRow={handleEditRow}
          />
        </div>
      </div>
    </section>
  );
};

export default Suppliers;
