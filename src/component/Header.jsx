import React from 'react'
import { IoCall } from "react-icons/io5";
import './Header.css'
const myStyle={
    textDecoration:'none',
    color:'black'
};
const dropdownStyle = {
  position: 'absolute',
  top: '30px',
  left: 0,
  backgroundColor: '#f9f9f9',
  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  zIndex: 1,
  minWidth: '150px',
  display: 'none',
  flexDirection: 'column',
};
const dropdownItemStyle = {
  padding: '10px',
  textDecoration: 'none',
  color: 'black',
  cursor: 'pointer',
};
function Header() {
  return (
    <div style={{height:"100px",width:"95vw",display:'flex',alignItems:'self-start',justifyContent:'space-between',padding:'20px',gap:'25px', fontSize:'20px'}}>
        <div style={{display:'flex', gap:'45px',width:'70vw'}}>
              <svg width="91" height="26" viewBox="0 0 91 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Allen logo" data-testid="onboardingAllenLogo" className="w-23 h-7"><path d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z" fill="#005BAA"></path></svg>
          <div style={{display:'flex',width:'100%', justifyContent:'space-between'}}>
              <a href="#" style={myStyle} className='nav-item'>Courses
                <div className="dropdown" style={dropdownStyle}>
                <div style={dropdownItemStyle}>Option 1</div>
                <div style={dropdownItemStyle}>Option 2</div>
                <div style={dropdownItemStyle}>Option 3</div>
              </div>
              </a>
              <a href="#" style={myStyle}>Test series</a>
              <a href="#" style={myStyle}>Classroom</a>
              <a href="#" style={myStyle}>Results</a>
              <a href="#" style={myStyle}>Scholarship</a>
              <a href="#" style={myStyle}>ALLEN E-Store</a>
              <a href="#" style={myStyle}>More</a>
          </div>
        </div>
        <div style={{width:'10%',display:'flex',alignItems:'self-start',justifyContent:'space-between'}}>
            <div style={{width:'35px',height:'35px',backgroundColor:"navy",borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <IoCall style={{color:'white',cursor:'pointer'}}/>
            </div>
            <button style={{border:'2px solid navy',height:'40px',width:'65px',borderRadius:'40%',backgroundColor:'white',cursor:'pointer'}}>Login</button>
        </div>
    </div>
  )
}

export default Header