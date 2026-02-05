// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App/ui/App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  // </StrictMode>,
  <>
    <App />
  </>
)
