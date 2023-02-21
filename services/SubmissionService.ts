import axios from "axios";
import { FormSchemaType as PatientInformationForm } from "../pages/patient-information";
import { FormSchemaType as CreateSubmissionForm } from "../pages/submission/create";
import { FormSchemaType as RegisterForm } from "../pages/auth/register";
import { Status } from "../interfaces";
import { useAuthStore } from "../src/store/auth";

const api = process.env.NEXT_PUBLIC_API_URL;

export const getSubmission = async (id: number) => {
  const token = useAuthStore.getState().token;
  const res = await axios.get(`${api}/submission/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getSubmissions = async (currentPage: number, status: string) => {
  const token = useAuthStore.getState().token;
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

export const getOwnSubmissions = async (
  userId: number | undefined,
  currentPage: number,
  status: Status | ""
) => {
  const token = useAuthStore.getState().token;
  const res = await axios.get(
    `${api}/submission/user/
        ${userId}
        ?page=
        ${currentPage}
        &status=
        ${status}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return res.data;
};

export const acceptSubmission = async (id: number) => {
  const token = useAuthStore.getState().token;
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
  const token = useAuthStore.getState().token;
  const res = await axios.get(`${api}/submission/${id}/prescription`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const uploadPrescription = async (id: number, file: File) => {
  const token = useAuthStore.getState().token;
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
  const token = useAuthStore.getState().token;
  const res = await axios.post(`${api}/complete-profile`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const createSubmission = async (data: CreateSubmissionForm) => {
  const token = useAuthStore.getState().token;
  const res = await axios.post(`${api}/submission`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const loginUser = async (data: RegisterForm) => {
  const res = await axios.post(`${api}/login`, data);
  return res.data;
};

export const registerUser = async (data: RegisterForm) => {
  const res = await axios.post(`${api}/register`, data);
  return res.data;
};

export const logoutUser = async () => {
  const token = useAuthStore.getState().token;
  const res = await axios.post(
    `${api}/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
