import axios from "axios";

const api = "http://localhost/api";

export default class SubmissionService {
  getSubmission = async (id: number, token: string) => {
    const res = await axios.get(`${api}/submission/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };

  getSubmissions = async (
    currentPage: number,
    status: string,
    token: string
  ) => {
    const res = await axios.get(
      `${api}/submission?page=${currentPage}&status=${status}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  };

  acceptSubmission = async (id: number, token: string) => {
    const res = await axios.put(
      `${api}/submission/${id}/accept`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  };

  getPrescription = async (id: number, token: string) => {
    const res = await axios.get(`${api}/submission/${id}/prescription`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };

  uploadPrescription = async (id: number, file: File, token: string) => {
    const formData = new FormData();
    formData.append("prescription", file);
    const res = await axios.post(
      `${api}/submission/${id}/prescription`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data;
  };
}
