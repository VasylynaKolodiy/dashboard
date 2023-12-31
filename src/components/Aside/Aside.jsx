import React, {useState} from 'react';
import "./Aside.scss";
import AsideItem from "../AsideItem/AsideItem";
import {ReactComponent as IconLogo} from "../../assets/images/logo.svg";
import {ReactComponent as IconDashboard} from "../../assets/images/aside-dashboard.svg";
import {ReactComponent as IconProduct} from "../../assets/images/aside-product.svg";
import {ReactComponent as IconCustomers} from "../../assets/images/aside-customers.svg";
import {ReactComponent as IconIncome} from "../../assets/images/aside-income.svg";
import {ReactComponent as IconPromote} from "../../assets/images/aside-promote.svg";
import {ReactComponent as IconHelp} from "../../assets/images/aside-help.svg";
import {ReactComponent as IconMenu} from "../../assets/images/aside-menu.svg";
import userPhoto from "../../assets/images/user-photo.jpg";
import {user} from "../../assets/data";

const Aside = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setMenuIsOpen(true);
    }

    const handleCloseMenu = () => {
        setMenuIsOpen(false);
    }

    return (
        <aside className="aside">
            <div className="aside__menu" onClick={handleOpenMenu}>
                <IconMenu/>
            </div>

            <div className={`aside__inner ${menuIsOpen ? 'open' : ''}`}>
                <div className="aside__top">
                    <div className="logo" onClick={handleCloseMenu}>
                        <a href="#" className="logo__link">
                            <div className="logo__image">
                                <IconLogo/>
                            </div>
                            <div className="logo__brand">
                                Dashboard <span className="logo__version">v.01</span>
                            </div>
                        </a>
                    </div>

                    <div className="list">
                        <AsideItem Icon={<IconDashboard/>} text='Dashboard' isArrow={false}
                                   handleCloseMenu={handleCloseMenu}/>
                        <AsideItem Icon={<IconProduct/>} text='Product' isArrow={true}
                                   handleCloseMenu={handleCloseMenu}/>
                        <AsideItem Icon={<IconCustomers/>} text='Customers' isArrow={true} isActive={true}
                                   handleCloseMenu={handleCloseMenu}/>
                        <AsideItem Icon={<IconIncome/>} text='Income' isArrow={true} handleCloseMenu={handleCloseMenu}/>
                        <AsideItem Icon={<IconPromote/>} text='Promote' isArrow={true}
                                   handleCloseMenu={handleCloseMenu}/>
                        <AsideItem Icon={<IconHelp/>} text='Help' isArrow={true} handleCloseMenu={handleCloseMenu}/>
                    </div>
                </div>

                <div className="user">
                    <div className="user__photo">
                        <img src={userPhoto} alt={user.name}/>
                    </div>

                    <div className="user__info">
                        <div className="user__name"> {user.name}</div>
                        <div className="user__position">{user.position}</div>
                    </div>
                </div>
            </div>

            <div className="aside__overlay" onClick={handleCloseMenu}/>
        </aside>
    );
};

export default Aside;