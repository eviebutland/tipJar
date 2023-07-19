import { Scripts } from '@remix-run/react';
import { Footer } from './Footer'
import { Menu } from './Menu'
import type { ReactElement } from 'react';

interface Props {
    children: ReactElement
    withJs?: boolean;

}
export const Layout = (props: Props) => {
    return (
        <div>
        {props.withJs && <Scripts></Scripts>}

        <Menu></Menu>

        {props.children}


        <Footer></Footer>
        </div>
    )
}