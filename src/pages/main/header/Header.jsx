import "./Header.css"

import logo from "../../../assets/icons/Logo.svg"
import arrow from "../../../assets/icons/arrow.svg"
import search from "../../../assets/icons/Search.svg"
import person from "../../../assets/icons/Person.svg"
import heart from "../../../assets/icons/Heart.svg"
import trash from "../../../assets/icons/Trash.svg"
import burger from "../../../assets/icons/Burger.svg"

export default function Header()
{
    return (
    <>
        <header className="main-page-header">
            <nav>
                
                <div className="center__container">
                    <div className="background-color"></div>
                    <div className="main-page-header__info">

                    
                    
                    <ul className="main-page-header__info-list">
                        <li className="main-page-header__info-item"><a href="#">Акции</a></li>
                        <li className="main-page-header__info-item"><a href="#">Шоурумы</a></li>
                        <li className="main-page-header__info-item"><a href="#">Доставка и оплата</a></li>
                        <li className="main-page-header__info-item"><a href="#">О компании</a></li>
                        <li className="main-page-header__info-item"><a href="#">Контакты</a></li>
                    </ul>
                </div>
                </div>

                <div className="main-page-header__navigation">
                    <div className="main-page-header__navigation-container">
                        
                        <div className="menu">
                            <img src={logo} style={{ height: "15px", width: "89px"}} alt="Ravak" />

                            <ul className="main-page-header__navigation-list">
                                <span className="main-page-header__catalog-link">
                                    <li><a className="main-page-header__navigation-catalog" href="#">Каталог</a></li>
                                    <img src={arrow} style={{ height: "11px", width: "11px"}} alt="arrow" />
                                </span>

                                <li><a className="main-page-header__navigation-item" href="#">Ванны</a></li>
                                <li><a className="main-page-header__navigation-item" href="#">Душевые углы, двери</a></li>
                                <li><a className="main-page-header__navigation-item" href="#">Поддоны</a></li>
                                <li><a className="main-page-header__navigation-item" href="#">Шторки</a></li>
                                <li><a className="main-page-header__navigation-item" href="#">Мебель</a></li>
                                <li><a className="main-page-header__navigation-item" href="#">Аксессуары</a></li>
                                <li><a className="main-page-header__navigation-item" href="#">Смесители</a></li>
                            </ul>
                        </div>

                        <div className="categories">
                            <div className="categories__work-phone">
                                <span 
                                style={{fontSize: "13px", fontWeight: "700"}}
                                >8 (800) 333-62-86</span>
                                <span
                                style={{color: "#535353", fontSize: "10px", fontWeight: "500", textDecoration: "underline"}}
                                >Заказать звонок</span>
                            </div>

                            <div className="categories__option-list">
                                
                                <a 
                                className="categories__option-item"
                                href="#">
                                    <img src={search} alt="search" />                                    
                                </a>

                                <a 
                                className="categories__option-item"
                                href="#">
                                    <img src={person} alt="person" />
                                </a>

                                <a 
                                className="categories__option-item"
                                href="#">
                                    <img src={heart} alt="heart" />
                               </a>

                                <a 
                                className="categories__option-item"
                                href="#">
                                    <img src={trash} alt="trash" />
                               </a>

                               <a 
                                className="categories__option-item main-page-header__navigation-burger-menu"
                                href="#">
                                    <img src={burger} className="header-menu__burger" alt="trash" />
                               </a>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    </>
    )
}