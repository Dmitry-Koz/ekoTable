import React from "react";
import './Header.css';
import {Link} from 'react-router-dom';

export default function Header () {
    return(
        <header>
            <nav>
                <Link to='/'>Данные API</Link>
                <Link to='/cars'>Автомобили</Link>
                <Link to='/clothes'>Одежда</Link>
                <Link to='/countries'>Страны</Link>
            </nav>
        </header>
    )
}