import React, { useState, useEffect } from "react";
import {
  UserPlusIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import Table from "../DynamicTable.jsx";
import Overview from "../Overview.jsx";
import Form from "../DynamicForm.jsx";
import Modal from "../DynamicModal.jsx";
import api from "../../../api";

// WHOLE PAGE
export default function Companies() {
  const [modal, setModal] = useState(false);

  // MODAL TOGGLE
  const toggleModal = () => {
    setBtnTitle("Create Company");
    setModal((m) => (m = !m));
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
    {
      label: "Company Name",
      name: "company_name",
    },
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

  // CHANGE NAMES TO CORRECT CAMEL_CASE
  const tableColumns = [
    {
      header: "Company ID",
      row: "index",
    },

    {
      header: "Company Name",
      row: "name",
    },
    {
      header: "Name",
      row: "rep_name",
    },
    {
      header: "Position",
      row: "rep_position",
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

  // backend

  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (form, callback) => {
    setLoading(true);

    if (rowToEdit === null) {
      try {
        const res = await api.post("http://127.0.0.1:8000/api/company/create", {
          company_name: form.company_name,
          representative_name: form.representative_name,
          representative_position: form.representative_position,
          city: form.city,
          barangay: form.barangay,
          street: form.street,
          phone_number: form.phone_number,
          email: form.email,
        });
        console.log("Company added:", res.data);
        window.location.reload();
        {
          errorWindow ? toggleErrorWindow() : "";
        }
        callback();
      } catch (error) {
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
  };

  // // THING THAT GETS SAVED ON TABLE
  // const [companyArr, setCompanyArr] = useState([]);

  // var errorFields = [];
  // //ADDS FORM OBJ ON COMPANY-ARRAY
  // const onSubmitHandler = (form, callback) => {
  //   if (
  //     form.companyName &&
  //     form.representativeName &&
  //     form.representativePosition &&
  //     form.number &&
  //     form.email &&
  //     form.city &&
  //     form.barangay &&
  //     form.street
  //   ) {
  //     toggleModal();
  //     {
  //       rowToEdit === null
  //         ? setCompanyArr((c) => [...c, form])
  //         : setCompanyArr((c) =>
  //             c.map((currentRow, index) => {
  //               if (index !== rowToEdit) {
  //                 return currentRow;
  //               } else {
  //                 return form;
  //               }
  //             })
  //           );
  //     }
  //     {
  //       errorWindow ? toggleErrorWindow() : "";
  //     }
  //     setRowToEdit(null);

  //     console.log(form)
  //   } else {
  //     toggleModal();

  //     errorFields = [];
  //     for (const [key, value] of Object.entries(form)) {
  //       if (!value) {
  //         errorFields.push(key);
  //       }
  //     }

  //     setErrors((e) => errorFields.join(", "));

  //     {
  //       !errorWindow ? toggleErrorWindow() : "";
  //     }
  //   }

  //RESETS FIELDS
  //   callback();
  // };

  const [rowToEdit, setRowToEdit] = useState(null);
  const [btnTitle, setBtnTitle] = useState("Create Company");
  const handleEditRow = (index) => {
    toggleModal();
    setRowToEdit(index);
    setBtnTitle("Edit Company");
  };

  return (
    <section className={`font-main flex-1`}>
      <div className={`bg-normalGray box-border flex  h-full`}>
        <Overview
          title={`Companies`}
          quantity={company.length < 10 ? "0" + company.length : company.length}
        />
        <div className={`flex flex-col flex-1 m-4`}>
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
            <Modal modal={modal} toggleModal={toggleModal}>
              <Form
                error={errorFields}
                btnTitle={btnTitle}
                title={"Company"}
                formArr={formArr}
                onSubmit={onSubmitHandler}
                defaultValue={rowToEdit !== null && company[rowToEdit]}
                icon={<UserPlusIcon className="size-5" />}
              />
            </Modal>
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
