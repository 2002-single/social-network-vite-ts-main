import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Applink } from "../../components/UI/Applink/Applink";
import { Header } from "../../components/UI/Header/Header";
import { RegWrapper } from "../../components/UI/RegWrapper/RegWrapper";
import { Router, } from "react-router-dom";


export const RegPage = () => {

  
  return (
    

    <div className="LoginPage">
        <Header />
      <h1>Регистрация</h1>
      <form action="#">
      <AppInput inputPlaceholder="Имя и фамилия" inputType="text" />
        <AppInput inputPlaceholder="Номер телефона" inputType="tel" />


        <AppInput inputPlaceholder="Пароль" inputType="password" />
        <AppButton buttonText="Зарегистрироваться" buttonType="button" isDisabled={false} />
      </form>

      <Applink href="ForgotPage" linkText="Забыли пароль?" />
     
     <RegWrapper avtoLink="LoginPage" />
    </div> 
  );
  
};
