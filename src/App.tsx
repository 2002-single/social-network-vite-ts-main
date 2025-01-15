import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegPage } from "./pages/RegPage/RegPage";
import { ForgotPage } from "./pages/ForgotPage/ForgotPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage /> 
  },
  {
    path: "/RegPage",
    element: <RegPage /> },
  {
    path: "/ForgotPage",
    element: <ForgotPage />}




]);

function App() {
  return (
    
    <RouterProvider router={router}>

      <div className="App">
    


        <div className="container">
        
        </div>
      </div>
    </RouterProvider>
  );
}

export default App;
