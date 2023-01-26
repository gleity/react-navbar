import menuItems from '../menuItems.json';
import MenuItem from './MenuItem';

export default function Navbar(){
    return (
        <nav>
            <ul className='menus'>
                {menuItems.map((menuItem, index) => {
                return (
                    <MenuItem item={menuItem} key={index}></MenuItem>
                )})}
            </ul>
        </nav>
    );
}