import './index.css'
import App from './App.tsx'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <QueryClientProvider client={queryClient}><App /></QueryClientProvider>
  </HashRouter>,
)
