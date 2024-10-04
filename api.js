// api.js
import axios from 'axios';

const API_BASE = 'https://api.example.com';

export const createLessonPlan = async (lessonPlan) => {
  return axios.post(`${API_BASE}/lesson-plans`, lessonPlan);
};

export const fetchLessonPlans = async () => {
  const response = await axios.get(`${API_BASE}/lesson-plans`);
  return response.data;
};

export const approveLessonPlan = async (id) => {
  return axios.put(`${API_BASE}/lesson-plans/${id}/approve`);
};

export const createMaterial = async (material) => {
  return axios.post(`${API_BASE}/materials`, material);
};

export const fetchMaterials = async () => {
  const response = await axios.get(`${API_BASE}/materials`);
  return response.data;
};

export const createAssignment = async (assignment) => {
  return axios.post(`${API_BASE}/assignments`, assignment);
};

export const sendNotification = async (message) => {
  return axios.post(`${API_BASE}/notifications`, { message });
};
