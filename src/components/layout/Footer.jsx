export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <p className="footer__designer">Designed & Built by Zhu Zhixin</p>
                    <ul className="footer__social-list">
                        <li>
                            <a href="https://www.linkedin.com/in/zhuzhixin-99/">
                                <i className="fa-brands fa-linkedin footer__icon"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/zhixin99">
                                <i className="fa-brands fa-github footer__icon"></i>
                            </a>  
                        </li>           
                    </ul>
                </div>
            </div>
        </footer>
    )
}