import api from "../../api";

export function useCreateData(info) {
  const createData = async (info) => {
    try {
      const res = await api.post(
        `http://127.0.0.1:8000/api/${info}/create/`,
        {
          supplier_name: form.supplier_name,
          phone_number: form.phone_number,
          description: form.description,
        }
      );
    } catch (error) {
      console.error(`Error creating ${info}:`, error);
    }
  };
  return { errorshere };
}