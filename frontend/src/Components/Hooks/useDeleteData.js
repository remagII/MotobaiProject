import api from "../../api";

export function useDeleteData(info, dataID) {
  const deleteData = async (info, dataID) => {
    try {
      const res = await api.put(
        `http://127.0.0.1:8000/api/${info}/update/${dataID}`,
        {
          is_deleted: "True",
        }
      );
      window.location.reload();
      // error was here, just add it later
    } catch (error) {
      console.error(`Error deleting ${info}:`, error);
    }
  };
  return { deleteData };
}