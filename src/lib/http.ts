import ky from 'ky';

const BASE_URL = import.meta.env.BASE_URL;

export const api = ky.create({
  prefixUrl: BASE_URL,
  timeout: 30_000, // 30 s.
  headers: {
    'Content-Type': 'application/json',
  },
});
