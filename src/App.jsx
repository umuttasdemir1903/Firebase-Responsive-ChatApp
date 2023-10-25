import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import { auth } from "./firebase/config";
import RoomPage from "./pages/RoomPage";
import Chat from "./pages/Chat";

function App() {
  //* Kullanıcının yetkisi var mı state'i tutuyoruz.
  //* State'in ilk değerini localStorage'den alcaz.
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  const [room , setRoom] = useState(null)

  //*Yetkisi yoksa >
  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }

  //* yetki varsa >
  return (
    <div className="form-container">
      {/* oda belirleniyese  */}
      {room ? (<Chat room={room} setRoom={setRoom}/>) 
      :
      //  oda belirlenmediyse > oda seçme
      ( <RoomPage setIsAuth={setIsAuth} setRoom={setRoom}/>)}
    </div>
  );
}

export default App;
