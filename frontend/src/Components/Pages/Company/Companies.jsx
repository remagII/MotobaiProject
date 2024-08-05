import React, { useState, useEffect } from "react";
import {
  UserPlusIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import Table from "../DynamicTable.jsx";
import Overview from "../Overview.jsx";
import DynamicForm from "../DynamicForm.jsx";
import DynamicModal from "../DynamicModal.jsx";
import api from "../../../api";

// WHOLE PAGE
export default function Companies() {
  const [method, setMethod] = useState("");
  const [modal, setModal] = useState(false);

  // MODAL TOGGLE
  const toggleModal = () => {
    setMethod("create");
    setBtnTitle("Create Company");
    setModal((m) => (m = !m));

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

  // fetch companies
  const [company, setCompany] = useState([]);

  useEffect(() => {
    fetchCompany();
  }, []);

  const fetchCompany = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/company/list?format=json"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch companies");
      }
      const data = await response.json();
      setCompany(data); // ito ung data ng list of companies (company)
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  //PROPS FOR <INPUT>
  const formArr = [
    { label: "Company Name", name: "company_name" },
    {
      label: "Representative Name",
      name: "representative_name",
    },
    {
      label: "Representative Position",
      name: "representative_position",
    },
    {
      label: "Phone Number",
      name: "phone_number",
    },
    {
      label: "Email",
      name: "email",
    },
    {
      label: "City",
      name: "city",
    },
    {
      label: "Barangay",
      name: "barangay",
    },
    {
      label: "Street",
      name: "street",
    },
  ];

  //DISPLAY TEMPLATE ON <TABLE></TABLE>

  const tableColumns = [
    {
      header: "Company ID",
      row: "id",
    },

    {
      header: "Company Name",
      row: "company_name",
    },
    {
      header: "Name",
      row: "representative_name",
    },
    {
      header: "Position",
      row: "representative_position",
    },
    {
      header: "City",
      row: "city",
    },
    {
      header: "Phone number",
      row: "phone_number",
    },
    {
      header: "Email",
      row: "email",
    },
  ];

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
            "http://127.0.0.1:8000/api/company/create",
            {
              company_name: form.company_name,
              representative_name: form.representative_name,
              representative_position: form.representative_position,
              city: form.city,
              barangay: form.barangay,
              street: form.street,
              phone_number: form.phone_number,
              email: form.email,
            }
          );
          console.log("Company added:", res.data);
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
          `http://127.0.0.1:8000/api/company/update/${rowIdEdit}`,
          {
            company_name: form.company_name,
            representative_name: form.representative_name,
            representative_position: form.representative_position,
            city: form.city,
            barangay: form.barangay,
            street: form.street,
            phone_number: form.phone_number,
            email: form.email,
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
        setRowIdEdit(null); // ito ung company id
      }

      callback();
    }
  };

  const [rowToEdit, setRowToEdit] = useState(null);
  const [rowIdEdit, setRowIdEdit] = useState(null);
  const [btnTitle, setBtnTitle] = useState("Create Company");
  const handleEditRow = (index) => {
    console.log("Editing row:", index); // just for troubleshoot
    console.log("Company ID:", company[index]?.id); // just for troubleshoot
    toggleModal();
    setRowIdEdit(company[index]?.id); // need to make null after this is done
    setRowToEdit(index);
    setMethod("edit");
    setBtnTitle("Edit Company");
  };

  return (
    <section className={`font-main h-full overflow-hidden`}>
      <div className={`bg-normalGray box-border flex h-full `}>
        <Overview
          title={`Companies`}
          quantity={company.length < 10 ? "0" + company.length : company.length}
        />

        <div className={`flex flex-col flex-1 m-4 `}>
          <div className={`m-4`}>
            <div className={`flex justify-between`}>
              <h1 className={`text-3xl font-bold`}>Companies</h1>
              <div>
                <button
                  onClick={toggleModal}
                  className={`text-white bg-red-600 border-2 border-red-800 rounded-lg px-4 py-2 mx-4 hover:bg-red-700  transition-all duration-100 flex gap-4 items-center`}
                >
                  Create Company
                  <div
                    className={`py-2 px-3 rounded-lg bg-red-700 hover:bg-red-800 transition-all duration-100`}
                  >
                    <UserPlusIcon className="size-5" />
                  </div>
                </button>
              </div>
            </div>

            <DynamicModal modal={modal} toggleModal={toggleModal}>
              <DynamicForm
                error={errorFields}
                btnTitle={btnTitle}
                title={"Company"}
                formArr={formArr}
                onSubmit={onSubmitHandler}
                defaultValue={rowToEdit !== null ? company[rowToEdit] : ""}
                icon={<UserPlusIcon className="size-5" />}
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
            dataArr={company} // changed from companyArr
            editRow={handleEditRow}
          />
        </div>
      </div>
    </section>
  );
}
