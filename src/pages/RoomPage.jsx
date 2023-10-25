import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const RoomPage = ({setIsAuth ,setRoom}) => {
    const handleLogout = () => {
        //* Firebase ile açtığımız otruumu sonlandırma
        signOut(auth).then(() => {
          //* local'den kaldırma
          localStorage.removeItem("token");
          //* Login sayfasına yönlendiremeyi tetikler.
          setIsAuth(false);
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        //* oda ismini küçük harfe çevirme
      const roomName = e.target[0].value.toLowerCase();
      //* state'i güncelleme  
      setRoom(roomName)

    }
  return (
<form onSubmit={handleSubmit} className="form">
        <h1>Chat Room</h1>
        <p>Which room will you enter?</p>
        <div className="form-group">
          <input required type="text" placeholder="Example: Weekend" />
        </div>
        <button type="submit">Log in</button>
        <button type="submit" onClick={handleLogout}>
          Log out
        </button>
      </form>
  )
}

export default RoomPage
