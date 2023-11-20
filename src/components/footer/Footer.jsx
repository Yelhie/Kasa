import LogoWhite from './../../assets/logo_white.png'

export default function footer() {
    return (
        <footer className='footer'>
            <div className="footer_logo">
                <img src={LogoWhite} alt="logo Kasa" />
            </div>
            <p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}



