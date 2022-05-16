import { createRoot } from 'react-dom/client';
// components
import App from '@/App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);
