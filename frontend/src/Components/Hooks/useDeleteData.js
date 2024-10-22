import api from "../../api";

// needs loading and error handling to pass

export function useDeleteData(info, dataID) {
  const deleteData = async (info, dataID) => {
    try {
      const url = `http://127.0.0.1:8000/api/${info}/soft_delete/${dataID}`;
      const formattedUrl = url.endsWith("/") ? url : `${url}/`;

      const res = await api.put(
        formattedUrl,
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