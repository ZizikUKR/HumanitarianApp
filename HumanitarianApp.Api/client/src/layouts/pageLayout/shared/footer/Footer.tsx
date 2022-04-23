import React from "react";
import './footer.scss';

export const Footer = (): React.ReactElement => (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__copyright">2022 &copy; humanitarian.org</div>
            </div>
            <div className="footer__copyright">Наші контакти:</div>
            <ul className="social-icons">
                <li><a className="social-icon-twitter" href="#" title="..." target="_blank" rel="noopener"/></li>
                <li><a className="social-icon-fb" href="https://www.facebook.com/kolomiiitsev/" title="..."
                       target="_blank" rel="noopener"/></li>
                <li><a className="social-icon-telegram" href="https://t.me/kolomiiitsev" title="..." target="_blank"
                       rel="noopener"/></li>
                <li><a className="social-icon-instagram" href="https://www.instagram.com/kolomiiitsev" title="..."
                       target="_blank" rel="noopener"/></li>
                <li><a className="social-icon-email" href="mailto:qwerty@gmail.com" title="..." target="_blank"
                       rel="noopener"/></li>
            </ul>
        </div>
    </footer>
);

