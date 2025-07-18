import ky from 'ky';

const BASE_URL = import.meta.env.VITE_API_URL;

if (!BASE_URL) {
  throw new Error(
    'VITE_API_URL não está configurada. Verifique o arquivo .env'
  );
}

export const api = ky.create({
  prefixUrl: BASE_URL,
});
