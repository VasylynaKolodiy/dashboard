import React from 'react';
import "./AsideItem.scss"
import {ReactComponent as IconArrow} from "../../assets/images/aside-arrow.svg";

const AsideItem = ({Icon, text, isArrow, isActive = false}) => {
    return (
        <div className={`item ${isActive ? 'active' : ''}`}>
            <div className="item__main">
                <div className="item__icon">
                    {Icon}
                </div>
                <div className="item__text">
                    {text}
                </div>
            </div>

            {isArrow && (
                <div className="item__arrow">
                    <IconArrow/>
                </div>
            )}
        </div>
    );
};

export default AsideItem;