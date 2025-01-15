import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegPage } from "./pages/RegPage/RegPage";
import { ForgotPage } from "./pages/ForgotPage/ForgotPage";



const router = createBrowserRouter([
  {
    path: "/LoginPage",
    element: <LoginPage /> // Путь для страницы логина
  },
  {
    path: "/RegPage",
    element: <RegPage /> // Путь для страницы регистрации
  },
  {
    path: "/ForgotPage",
    element: <ForgotPage /> // Путь для страницы регистрации
  }




]);

function App() {
  return (
    
    <RouterProvider router={router}>

      <div className="App">
    


        <div className="container">
          {/* Ваш контент */}
        </div>
      </div>
    </RouterProvider>
  );
}

export default App;
