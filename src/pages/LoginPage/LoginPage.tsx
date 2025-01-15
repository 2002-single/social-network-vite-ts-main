import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Applink } from "../../components/UI/Applink/Applink";
import { Header } from "../../components/UI/Header/Header";
import { IconsWrapper } from "../../components/UI/IconsWapper/IconsWrapper";


import "./LoginPage.scss";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
       <Header />
      <h1>Авторизация</h1>
      <form action="#">
        <AppInput inputPlaceholder="Номер телефона" inputType="tel" />
        <AppInput inputPlaceholder="Пароль" inputType="password" />
        <AppButton buttonText="Войти" buttonType="button" isDisabled={false} />
      </form>

      <Applink href="ForgotPage" linkText="Забыли пароль?" />
     

      <IconsWrapper regLink="RegPage" />
    </div> 
  );
};
