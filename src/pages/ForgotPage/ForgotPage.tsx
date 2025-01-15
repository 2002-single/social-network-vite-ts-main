import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Applink } from "../../components/UI/Applink/Applink";
import { Header } from "../../components/UI/Header/Header";






export const ForgotPage = () => {

  
  return (
    <div className="LoginPage">
         <Header/>
      <h1>Забыли пароль?</h1>
      <form action="#">
      
        <AppInput inputPlaceholder="Номер телефона" inputType="tel" />


        
        <AppButton buttonText="Отправить" buttonType="button" isDisabled={false} />
      </form>

      
     
    </div> 
  );
  
};

 