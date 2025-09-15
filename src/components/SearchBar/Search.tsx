'use client'

import './Search.scss'
import {useRef} from 'react';
import {FaMagnifyingGlass} from 'react-icons/fa6';

interface Props {
    setNewMovieName: (name: string) => void;
}

export default function Search (props: Props){    
    const inputValue = useRef();

    const handleChange = (event) => {
        event.preventDefault();
        const newMovieName = (inputValue.current.value);
        console.log(newMovieName);
        props.setNewMovieName(newMovieName);
    }
    
    return (
        <form className="search-area" onSubmit={handleChange}>
            <input type="text" name="name" id="name"
            ref={inputValue}
            autoComplete='off' placeholder='Digite o nome do filme' />
            <button className='search-btn' onClick={handleChange}><FaMagnifyingGlass/></button>
        </form>
    )
}