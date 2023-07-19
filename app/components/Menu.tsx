import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { Scripts } from '@remix-run/react';

interface Props {
  tipUser?: string;
}
export const Menu = (props: Props) => {
  const [displayMenu, setDisplayMenu] = useState(false)

  const user = props.tipUser ?? "213123";
  return (
    <div >
      {!displayMenu ?
        <div className='flex justify-end'>
          <button className='border-transparent' onClick={() => setDisplayMenu(true)}>
            <FontAwesomeIcon icon={faBars} size='xl'></FontAwesomeIcon>
          </button>
        </div>
        : <div className='fixed w-full h-full bg-white top-0 bottom-0 z-100'>
          <div className='flex justify-end'>
            <button className='border-transparent' onClick={() => setDisplayMenu(false)}>
              <FontAwesomeIcon icon={faBars} size='xl'></FontAwesomeIcon>
            </button>
          </div>
          <ul className='flex flex-col justify-center items-center'>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/account">Account</a>
            </li>
            <li>
              <a href={`/tip/${user}`}>Tip user</a>
            </li>
          </ul>
        </div>
      }

      <Scripts></Scripts>
    </div>
  );
};
