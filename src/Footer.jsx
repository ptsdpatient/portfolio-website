import { react, useState } from 'react';
import './styles/Footer.css'
const Footer = (theme) => {
    const [bgColor, setbgColor] = useState({ backgroundColor: '#1f2434' })
    
    return (<>
        <div class="footer" style={{ backgroundColor: theme.theme === 'white' ? 'snow' :'#1f2434'}}><p>portfolio made by - Tanishq Dhote</p></div>
    </>);
}
export default Footer;