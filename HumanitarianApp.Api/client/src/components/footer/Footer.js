import './footer.scss';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__copyright">2022 &copy; humanitarian.org</div>
          <div className="footer__contacts">
            Наш email: <a href="mailto:qwerty@gmail.com" className="footer__email">qwerty@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;