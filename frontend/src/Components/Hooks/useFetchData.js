import { useState, useEffect } from 'react';

export function useFetchData(info) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchInfo = async (info) => {
      try { 
        const response = await fetch(
          `http://127.0.0.1:8000/api/${info}/list?format=json`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
  
        if (!response.ok) {
          throw new Error(`Failed to fetch ${info}s`);
        }
        const data = await response.json();
        // const filteredData = data.filter((customer) => !customer.is_deleted);
        // setCustomer(filteredData); 
      } catch (error) {
        console.error(`Error fetching ${info}s:`, error);
      }
    };
  }, []);

  

  return { data };

}