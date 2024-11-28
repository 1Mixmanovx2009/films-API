import React from 'react'
import '../App.css'
import Афиша from '../assets/images/Афиша.svg'
import siteLogo from '../assets/images/siteLogo.svg'
import Билеты from '../assets/images/Билеты.svg'
import Сеансы from '../assets/images/Сеансы.svg'
import Поиск from '../assets/images/Поиск.svg'


function home() {
    return (
        <div>
            <header className='flex justify-between items-center container mx-auto xl opacity-[#00000080] py-[16px]'>
                <a href="/">
                    <img src={siteLogo} alt="" />
                </a>
                <ul className='flex justify-between items-center gap-7'>
                    <li>
                        <a className='flex flex-col items-center text-[#A1A1A1]' href="">
                            <img src={Афиша} alt="" />
                            Афиша
                        </a>
                    </li>
                    <li>
                        <a className='flex flex-col items-center text-[#A1A1A1]'  href="">
                            <img src={Сеансы} alt="" />
                            Сеансы
                        </a>
                    </li>
                    <li>
                        <a  className='flex flex-col items-center text-[#A1A1A1]' href="">
                            <img src={Билеты} alt="" />
                            Билеты
                        </a>
                    </li>
                    <li>
                        <a  className='flex flex-col items-center text-[#A1A1A1]' href="">
                            <img src={Поиск} alt="" />
                            Поиск
                        </a>
                    </li>
                </ul>
                <div className='flex justify-between  border-slate items-center gap-[20px]'>
                    <select className='bg-[#1D1D1D80] text-white py-[10px] px-[8px] rounded-[12px]'>
                        <option value="US">UZ</option>
                        <option value="RU">RU</option>
                    </select>
                    <button className='w-[180px] py-[18px] text-[16px] font-[500] text-center text-white border border-[#C61F1F] bg-[#C61F1F] rounded-[12px]'>Войти</button>
                </div>
            </header>
            <main>
                <div className=''></div>
            </main>
        </div>
    )
}

export default home