import React from 'react';
import './styles/App.css'
import InputOption from './InputOption';
import Input from './Input';
import Footer from './Footer';
import Tanishq from './icon/webp/Tanishq.webp'
import { useEffect, useState } from 'react';

const App = ({ theme }) => {
    const [divTheme, setdivTheme] = useState({ backgroundColor: 'snow' })
    const [divStyle, setDivStyle] = useState({  width: '100%', height: '40rem'})
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
    const [textStyle, setTextStyle] = useState({ color:'#3076f3'})
    window.onresize = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true)
            setDivStyle({width:'100%',height:'60rem'})

        } else {
            setIsMobile(false)
            setDivStyle({ width: '100%', height: '60rem' })

        }
    }
    useEffect(() => {
        if (theme == "white") {
            document.body.style.backgroundColor = "#dedede";
            setdivTheme({ backgroundColor: 'snow' });
        } else {
            document.body.style.backgroundColor = "black";
            setdivTheme({ backgroundColor:'#1f2434'});
        }
    }, [theme])


    return (
        <>

            <div class="canvaContainer" >
                <div style={{ ...divTheme, ...divStyle,margin:'auto',marginTop:isMobile?'2rem':'5rem',backgroundColor:'black',height:'80rem' }}>
                    <div style={{ width: isMobile ? '80%' : '60%', height: isMobile ? '60rem' : '40rem', margin: 'auto', display:'flex' ,flexDirection:isMobile?'column':'row'}}>
                        <p class="typewriter" style={{ color:'#3076f3',fontSize:isMobile?'5rem':'4.5rem',position:'relative'} }>Hi there! myself Tanishq Dhote </p>
                        <img style={{userSelect:'none',transform:'scaleX(-1) rotate(-10deg)'}} src={Tanishq}></img>
                    </div>
                    <div class="detailsContainer"><div class="details">hello world nigga</div></div>
                    
                </div>
                <div id="about" style={{ ...divTheme, ...divStyle }}>
                </div>
                <div id="experience" style={{ ...divTheme, ...divStyle }}>
                </div>
                <div id="projects" style={{ ...divTheme, ...divStyle }}>
                </div>
                <div id="contact" style={{ ...divTheme, ...divStyle }}>
                </div>
                <div id="resume" style={{ ...divTheme ,...divStyle}}>
                </div>
            </div>
            <Footer theme={theme} />
        </>
    );
}

export default App;
