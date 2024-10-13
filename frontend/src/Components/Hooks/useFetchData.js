import { useState, useEffect } from 'react';
import { ACCESS_TOKEN } from "../../constants"; 

export function useFetchData(info) {
  const [data, setData] = useState([]);
  const token = localStorage.getItem(ACCESS_TOKEN); 

  useEffect(() => {
    const fetchInfo = async () => {
      try {  
        const response = await fetch(
          `http://127.0.0.1:8000/api/account/list?format=json`,
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
        const dataThings = await response.json();
        const filteredData = dataThings.filter(({info}) => !{info}.is_deleted);
        setData(filteredData); 
        console.log(filteredData);
      } catch (error) {
        console.error(`Error fetching ${info}s:`, error);
      }
    };

    fetchInfo();
    
  }, [info, token]);

  return { data };
}