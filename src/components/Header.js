import {useEffect} from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails, setSignOutState} from '../features/user/userSlice'
import { auth, provider} from '../firebaseConfig';


 const Header = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useSelector(selectUserName);
    const userphoto = useSelector(selectUserPhoto);

   useEffect(() => {
auth.onAuthStateChanged(async (user) => {
    if (user) {
        setUser(user);
        navigate('/home')
    }
})
   }, [username]);

 const handleAuth = () =>  {
   if(!username) {
    auth.signInWithPopup(provider).then((result) => {
        setUser(result.user);
    }).catch ((error) => {
      alert(error.message)
    })
   }
   else if (username) {
    auth
    .signOut()
    .then(() => {
        dispatch(setSignOutState());
        navigate("/");
    })
   }
 };

  const setUser = (user) => {
    dispatch(
        setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photo,
        })
       
    );
  };

  return (
    <Nav>
    <Logo>
      <img src='/images/logo.svg' alt='logo' />
    </Logo>
    { !username ? 
    (
    <Login onClick={handleAuth}>Login</Login>) : (
        <>
    <NavMenu>
        <a href='/home'>
            <img src='/images/home-icon.svg' alt='home' />
            <span>HOME</span>
        </a>
        <a href='#'>
            <img src='/images/search-icon.svg' alt='home' />
            <span>SEARCH</span>
        </a>
        <a href='#'>
            <img src='/images/watchlist-icon.svg' alt='home' />
            <span>WATCHLIST</span>
        </a>
        <a >
            <img src='/images/original-icon.svg' alt='home' />
            <span>ORIGNALS</span>
        </a>
        <a href='#'>
            <img src='/images/movie-icon.svg' alt='home' />
            <span>MOVIES</span>
        </a>
        <a href='#'>
            <img src='/images/series-icon.svg' alt='home' />
            <span>SERIES</span>
        </a>
    </NavMenu>
    <SignOut>
    <UserImg src = '/images/images.png' alt = '' />
    <DropDown>
        <span onClick={handleAuth}>SignOut</span>
    </DropDown>
    </SignOut>
    </>
    )}
    </Nav>
  )
}

export default Header;

const Nav = styled.nav`
 height: 70px;
 left:0;
 right:0;
 top:0;
 position: fixed;
 background-color: #090b13;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 36px;
 letter-spacing: 16px;
 z-index: 3;
 
`;

const Logo = styled.a`

 padding: 0;
 width: 80px;
 margin-top: 4px;
 max-height: 70px;
 font-size: 0;
 display: inline-block;

 img{
    display: block;
    width: 100%;
 }
`;

const NavMenu = styled.div`
 align-items: center;
 display: flex;
 flex-flow: row nowrap;
 height: 100%;
 justify-content: flex-end;
 margin: 0;
 padding: 0;
 position: relative;
 margin-right: auto;
 margin-left: 25px;

 a{
    display: flex;
    align-items: center;
    padding: 0 12px;
 

 img{
    height: 20px;
    min-width:20px;
    width: 2px;
    z-index: auto;

 }

 span{
    color: rgb(249,249,249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1px;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;
    

    &:before {
    background-color: rgb(249,249,249);
    border-radius: 0px 0px 4px 4px;
    bottom: -6px;
    content: '';
    height: 2px;
    opacity: 0;
    position: absolute;
    left: 0px;
    right: 0px;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94 ) 0s;
    visibility: hidden;
    width: auto;
 }
 }
 &:hover {
    span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
    }
 }
 }

 
 @media ( max-width: 768px) {
    display: none;
}

`;

const Login = styled.a`
 background-color: rgba(0,0,0,0.6);
 padding: 6px 12px;
 letter-spacing: 1.5px;
 border: 1px solid #f9f9f9;
 border-radius: 4px;
 transition: all 0.2s ease 0s;
 cursor: pointer;

  &:hover{
    background-color: #f9f9f9;
    color: #000;
  }
`;

const UserImg = styled.img`
  height: 100%;
  width: 100%;
`;


const DropDown = styled.div`
 position :absolute ;
 top: 48px;
 right: 0;
 background: rgba(19,19,19);
 border: 1px Solid rgba(151,151,151, 0.34);
 border-radius: 4px;
 box-shadow: rgb(0 0 0/50%) 0px 0px 18px 0px;
 padding: 10px;
 font-size: 14px;
 letter-spacing: 3px;
 width: 100px;
 opacity: 0;
`;

const SignOut = styled.div`
 position: relative;
 width: 48px;
 height: 48px;
 display:flex ;
 cursor: pointer;
 align-items: center;
 justify-content: center;

 ${UserImg} {
    border-radius: 50%;
 }

 &:hover {
    ${DropDown} {
        opacity: 100;
        transition-duration: 1s;
    }
 }
`;
