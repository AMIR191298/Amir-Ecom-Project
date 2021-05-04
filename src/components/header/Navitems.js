import React from 'react'
import styled from 'styled-components'
import icon from '../images/icon.png';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import  { Link } from "react-router-dom";

function Navitems(props) {
    return (
        <Container>
            <Contents>
            <Logo>
                <img src={(icon)}/>
            </Logo>
            <MenuItems>
                <Home>
                <HomeIcon/>
                </Home>
                <span></span>
                <Cart>
                    <Link to="./cart">
                         <ShoppingCartIcon/>
                    </Link>
                </Cart>
                    <OrderHistory>
                        <AccessTimeIcon/>
                    </OrderHistory>

                    <Search>
                        <SearchIcon/>
                    </Search>
                
            </MenuItems>
            <SingInOutIcon>
                <AccountCircleIcon/>
            </SingInOutIcon>
            </Contents>
        </Container>
    )
}

export default Navitems

const Container = styled.div`
height: 100vh;
width: 60px;
justify-content: center;
align-items: center;
padding-top: 50px;
padding-bottom: 50px;
background-color: rgb(255,255,255);
box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.4);
position: fixed;
`
const Contents = styled.div`
display: flex;
flex-direction: column;
margin: 0;
margin: 0 auto;
justify-content: center;
align-items: center;
z-index: 3;
`

const Logo = styled.div`
display: flex;
align-items: center;
width: 25px;
height: 25px;
margin-bottom: 130px;
img{
    height: 100%;
    width: 100%;
    border-radius: 50px;
}
`
const MenuItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
span{
    color: red;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: -10px;
}

`
const SingInOutIcon = styled.div`
display: flex;
align-items: center;
margin-top: 130px;
color: #003352;
cursor: pointer;
:hover{
    border-left: 2px solid #fcc24e;
    transform: scale(1.5); 
    transition: transform 0.2s ease;
    
}
`
const Home = styled.div`
display: flex;
margin-bottom: 30px;
margin-left: 0px;
z-indez: 3;
color:#003352;
cursor: pointer;
:hover{
    border-left: 2px solid #fcc24e;
    transform: rotate(360deg) scale(1.3); 
    transition: transform 0.5s ease;
    
}
`
const Cart = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
z-indez: 3;
cursor: pointer;
:hover{
    border-left: 2px solid #fcc24e;
    transform: rotate(360deg) scale(1.3); 
    transition: transform 0.5s ease;
    
}
a{
    color:#003352;
}
`
const OrderHistory = styled.div`
display: flex;
margin-bottom: 30px;
z-indez: 3;
color: #003352;
cursor: pointer;
:hover{
    border-left: 2px solid #fcc24e;
    transform: rotate(360deg) scale(1.3); 
    transition: transform 0.5s ease;
    
}
`
const Search = styled.div`
display: flex;
margin-bottom: 30px;
z-indez: 3;
color: #003352;
cursor: pointer;
:hover{
    border-left: 2px solid #fcc24e;
    transform: rotate(360deg) scale(1.5); 
    transition: transform 0.2s ease;
    
}
`
