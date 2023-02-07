import axios from "axios";
import { FormSchemaType as PatientInformationForm } from "../pages/patient-information";
import { FormSchemaType as CreateSubmissionForm } from "../pages/submission/create";
import { useAuthStore } from "../src/store/auth";

const api = "http://localhost/api";

const token = useAuthStore.getState().token;

export const getSubmission = async (id: number) => {
  const res = await axios.get(`${api}/submission/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getSubmissions = async (currentPage: number, status: string) => {
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

export const acceptSubmission = async (id: number) => {
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

export const getPrescription = async (id: number) => {
  const res = await axios.get(`${api}/submission/${id}/prescription`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const uploadPrescription = async (id: number, file: File) => {
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

export const completeProfile = async (data: PatientInformationForm) => {
  const res = await axios.post(`${api}/complete-profile`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const createSubmission = async (data: CreateSubmissionForm) => {
  const res = await axios.post(`${api}/submission`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
