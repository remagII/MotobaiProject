import { useState } from "react";
import Swal from "sweetalert2";
import api from "../../api";

export function useUpdateData() {
  const [loading, setLoading] = useState(false);

  const updateData = async (
    info,
    id,
    formData,
    successMessage,
    errorMessage,
    toggleModal
  ) => {
    const url = `http://127.0.0.1:8000/api/${info}/update/${id}/`;
    // Show confirmation dialog before proceeding
    const result = await Swal.fire({
      title: `Are you sure you want to edit this data?`,
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#196e3a",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, edit it`,
    });

    // If user confirms, proceed with the action
    if (result.isConfirmed) {
      setLoading(true);
      try {
        const res = await api.put(url, formData);
        Swal.fire({
          title: successMessage,
          text: "The operation was successful.",
          icon: "success",
        });
        toggleModal();
        return res; // Optionally return the response
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: errorMessage,
          icon: "error",
        });
      } finally {
        setLoading(false);
      }
    } else {
      // If user cancels, keep the modal open
      console.log("Action cancelled, modal will remain open.");
    }
  };

  return { updateData, loading };
}
