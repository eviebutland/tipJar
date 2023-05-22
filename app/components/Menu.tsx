import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Props {
  tipUser?: string;
}
export const Menu = (props: Props) => {
  function handleOpenMenu() {
    console.log("toggle menu");
  }

  const user = props.tipUser ?? "213123";
  return (
    <div>
      <button onClick={handleOpenMenu}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </button>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
      <a href="/account">Account</a>
      <a href={`/tip/${user}`}>Tip user</a>
    </div>
  );
};
