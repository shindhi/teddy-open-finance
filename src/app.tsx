import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} index />
      </Routes>
    </BrowserRouter>
  );
}
