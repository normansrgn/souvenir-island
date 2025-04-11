import { useEffect, useState } from "react";
import "./DiscountToast.scss";

const DiscountToast = ({ isAuthenticated }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000); // Появляется через 1 сек

   

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={`discount-toast ${visible ? "show" : ""}`}>
      {isAuthenticated
        ? "🎉 У вас скидка 5% как у авторизованного пользователя!"
        : "🔐 Авторизуйтесь и получите скидку 5%!"}
    </div>
  );
};

export default DiscountToast;