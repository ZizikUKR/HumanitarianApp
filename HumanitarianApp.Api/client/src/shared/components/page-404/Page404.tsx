import React from "react";
import page404 from 'assets/icons/404.svg';
import './page404.scss';

const Page404 = () => (
    <div className="page-404">
        <img className="page-404__img" src={page404} alt="404"/>
    </div>
);

export default Page404;
