import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Menu = () => {
  function handleOpenMenu() {
    console.log("toggle menu");
  }
  return (
    <div>
      <button onClick={handleOpenMenu}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </button>
      <a href="/login">Login</a>
      <a href="/login/register">Register</a>
      <a href="/account">Account</a>
      <a href="/tip/213123">Tip user</a>
    </div>
  );
};
