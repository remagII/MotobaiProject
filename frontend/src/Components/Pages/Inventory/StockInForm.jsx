import React, { useEffect, useState } from "react";
import Logo from "./Logo.png";
import "../pages.css";
import Table from "../DynamicTable";

const StockInForm = () => {
  const [initialStockIn, setInitialStockIn] = useState([]);
  const [options, setOptions] = useState([]);
  const [supplier, setSupplier] = useState([]);

  const [product, setProduct] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/product/list?format=json"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setOptions(data); // ito ung data ng list of products (product)
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
        "http://127.0.0.1:8000/api/supplier/list?format=json"
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
      name: "minimum_treshold",
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
      row: "minimum_treshold",
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

  const onChangeHandler = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  //SET FORM BACK TO OLD STATE
  const onSubmitHandler = () => {
    setForm(initialForm);
    setInitialStockIn((s) => [...s, form]); // NOT FINAL may problem sa pag kuha ng obj
    console.log(form);
    console.log(initialStockIn);
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
            <form onSubmit={onSubmitHandler} className={`min-w-[65vw] `}>
              <div className={`bg-gray-100 py-10 px-8 rounded-b-lg`}>
                <h1 className="font-bold text-2xl mb-10">Stock In</h1>
                <div className="mb-12 ml-4">
                  <Table columnArr={tableColumns} dataArr={initialStockIn} />
                </div>
                <div className={`gap-x-6 gap-y-8 flex flex-wrap `}>
                  <div className="flex gap-4">
                    <label className="font-bold">Product</label>
                    <select
                      className={`text-lg min-w-[10vw] min-h-6 rounded-lg pl-2`}
                      required
                      onChange={(e) => onChangeHandler(e)}
                      name="product_name"
                    >
                      {options.map((option, index) => (
                        <option key={index} value={`${option.product_name}`}>
                          {option.product_name}
                        </option>
                      ))}
                    </select>
                    <label className="font-bold">Supplier</label>
                    <select
                      className={`text-lg min-w-[10vw] min-h-6 rounded-lg pl-2`}
                      required
                      onChange={(e) => onChangeHandler(e)}
                      name="supplier_name"
                      defaultValue={`${supplier.supplier_name}`}
                    >
                      {supplier.map((supplier, index) => (
                        <option key={index} value={`${supplier.supplier_name}`}>
                          {supplier.supplier_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {formArr.map(({ label, name, type, readOnly }, index) => (
                    <div
                      className={`flex flex-col justify-between`}
                      key={index}
                    >
                      <input
                        className={`text-base border-2 rounded py-2 px-4 focus:border-green-600 focus:ring-0 focus:outline-none`}
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
                  <button
                    onClick={(e) => {
                      onSubmitHandler();
                    }}
                    type="submit"
                    className={`bg-white border-2 border-red-600 rounded px-4 py-2 hover:bg-red-600 hover:text-white transition-all duration-100 flex gap-4 items-center`}
                  >
                    Add Product to Stock In
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
