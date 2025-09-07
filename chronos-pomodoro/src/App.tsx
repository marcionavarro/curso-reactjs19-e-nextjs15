import { TaskContextProvider } from './contexts/TaskContext';
import { Home } from './pages/Home';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
