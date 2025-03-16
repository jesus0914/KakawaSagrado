import axios from 'axios';

export const makePaymentRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // Asegúrate de configurar esta variable de entorno
});
