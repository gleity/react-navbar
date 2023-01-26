
import Dropdown from './Dropdown';
import {useState} from 'react';

export default function MenuItem({ item, depth }){
    const initialDepth = depth ? depth : 0;
    const [dropdown, setDropdown] = useState(false)
    return (
        <li className='menu-items'>
            {item.subMenu ? (
                <>
                <button 
                type="button" 
                aria-expanded={dropdown ? "true" : "false"}
                onClick={() => setDropdown(prev => !prev)}>
                    {item.title}{' '}
                </button>
                <Dropdown subMenu={item.subMenu} isActive={dropdown} depth={initialDepth}></Dropdown>
                </>
            ) : (
                <a href={item.url}>{item.title}</a>
            )}
        </li>
    );
};
