import './footer.scss';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__copyright">2022 &copy; humanitarian.org</div>
        </div>
        <div className="footer__copyright">Наші контакти:</div>
        <ul class="social-icons" >
          <li><a class="social-icon-twitter" href="#" title="..." target="_blank" rel="noopener"></a></li>
          <li><a class="social-icon-fb" href="https://www.facebook.com/kolomiiitsev/" title="..." target="_blank" rel="noopener"></a></li>
          <li><a class="social-icon-telegram" href="https://t.me/kolomiiitsev" title="..." target="_blank" rel="noopener"></a></li>
          <li><a class="social-icon-instagram" href="https://www.instagram.com/kolomiiitsev" title="..." target="_blank" rel="noopener"></a></li>
          <li><a class="social-icon-email" href="mailto:qwerty@gmail.com" title="..." target="_blank" rel="noopener"></a></li>
        </ul>      
      </div>      
    </footer>
  );
}

export default Footer;