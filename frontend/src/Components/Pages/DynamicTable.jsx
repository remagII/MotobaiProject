import React from "react";

export default function Table({ editRow, columnArr, dataArr }) {
  return (
    <section>
      <div>
        <div className={`mr-10`}>
          <table
            className={`border-collapse m-4 p-4 min-w-full rounded-lg overflow-hidden shadow-shadowTable `}
          >
            <thead className={`bg-red-600 p-4 m-10 text-left text-white `}>
              <tr>
                {columnArr.map((item, index) => {
                  return (
                    <th key={index} className={`p-3`}>
                      {item.header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {dataArr.map((item, index) => {
                return (
                  <tr
                    onClick={() => editRow(index)}
                    className={`  hover:bg-red-700 hover:border-red-800 hover:text-white  border-b-2 border-gray-200 transition-all duration-75 ease-in cursor-pointer`}
                    key={index}
                  >
                    {columnArr.map((header, i) => {
                      return (
                        <>
                          <td key={i} className="p-4">
                            {header.row === "index"
                              ? index + 1
                              : item[header.row]}
                          </td>
                        </>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
