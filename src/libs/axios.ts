import axios from 'axios';

const baseUrl = 'https://6222994f666291106a29f999.mockapi.io';

export const axiosInstance = axios.create({
  baseURL: baseUrl,
});
