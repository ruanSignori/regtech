import { Routes } from '@routes/index.routes';
import { StatusBar } from 'expo-status-bar';
import { AuthContextProvider } from "./src/contexts/AuthContext"

export function App() {
  return (
    <AuthContextProvider >
      <StatusBar translucent style='dark'/>
      <Routes />
    </AuthContextProvider>
  );
}