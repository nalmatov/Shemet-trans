import { createRoot } from 'react-dom/client';
import App from './App.tsx';
// Styles
import './styles/global.scss';
import './styles/react-phone-input.scss';
import 'react-phone-input-2/lib/style.css';


createRoot(document.getElementById('root')!).render(<App />);
