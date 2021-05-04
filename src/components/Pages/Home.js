import React from 'react'
import styled from 'styled-components'
import Navitems from '../header/Navitems'
import SimpleSlider from '../Slider/SimpleSlider'
import Product from'../Products/Product'

function Home() {
     
    const all = [
        {
            title:"duston ID 116 Bluetooth Fitness Tracker Watch- Black (Wireless)",
            price: "799",
            image: "https://m.media-amazon.com/images/I/51sFsN13wKL._AC_UL320_.jpg" ,
            tag: "watch"
        },
        {
            title: "Multicolor Casual Loafers, Sneakers Shoes",
            price: "399",
            image: "https://m.media-amazon.com/images/I/718mnK-fVVL._AC_UL320_.jpg",
            tag: "shoes"
        },
        {
            title: "Redmi Note 10 (Frost White, 4GB RAM, 64GB Storage)",
            price: "12499",
            image: "https://m.media-amazon.com/images/I/41emjYmstAL.jpg",
            tag: "phone"
        },
        {
            title: "boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)",
            price: "399",
            image: "https://m.media-amazon.com/images/I/31IdiM9ZM8L.jpg",
            tag: "all"
        },
    ]
        const phone = [
                {
                    title:"OnePlus 9 Pro 5G (Pine Green, 8GB RAM, 128GB  Storage)OnePlus 9 Pro 5G (Pine Green, 8GB RAM, 128GB  Storage)",
                    price: "64799",
                    image: "https://images-eu.ssl-images-amazon.com/images/I/41o6Y2Rb+ML._AC_SX184_.jpg",
                    tag: "phone"
                },
                {
                    title: "OnePlus 9 5G (Arctic Sky, 8GB RAM, 128GB Storage)OnePlus 9 5G (Arctic Sky, 8GB RAM, 128GB Storage)",
                    price: "64999",
                    image: "https://images-eu.ssl-images-amazon.com/images/I/41uMUxlpqwL._AC_SX184_.jpg",
                    tag: "phone"
                },
                {
                    title: "Samsung Galaxy A72 (Violet, 8GB RAM, 128GB",
                    price: "34499",
                    image: "https://m.media-amazon.com/images/I/81nEqE5WMuL._AC_SS450_.jpg",
                    tag: "phone"
                },
                {
                    title: "LG W41 (Magic Blue, 48 MP Quad Camera, 4GB RAM, 64GB Storage), Small",
                    price: "15999",
                    image: "https://images-na.ssl-images-amazon.com/images/I/614%2BW18ms%2BL._SL1500_.jpg",
                    tag: "phone"
                }
        ]
       
        const watch = [
            {
                title:"Fire-Boltt SPO2 Full Touch 1.4 inch Smart Watch 8 Days Battery Life Compatible with Android and iOS IPX7",
                price: "2999",
                image: "https://m.media-amazon.com/images/I/61T4VGaj0DL._AC_UL320_.jpg",
                tag: "watch"
            },
            {
                title: "realme Watch S with 1.3 TFT-LCD Touchscreen, 15 Days Battery Life, SpO2 & Heart Rate Monitoring",
                price: "4999",
                image: "https://m.media-amazon.com/images/I/51KsSgYGOKL._AC_UL320_.jpg",
                tag: "watch"
            },
            {
                title: "Amazfit Bip U Smart Watch,1.43 HD Color Display, SpO2 & Stress Monitor",
                price: "4499",
                image: "https://m.media-amazon.com/images/I/61-ZuCsybdL._AC_UL320_.jpg",
                tag: "watch"
            },
            {
                title: "Infinizy (1+1 Year Warranty) D116 Intelligence Bluetooth Monitor/Smart Bracelet/Health Bracelet/Smart Watch",
                price: "1699",
                image: "https://m.media-amazon.com/images/I/61ZEacHJgxS._AC_UL320_.jpg",
                tag: "watch"
            }
        ]
        const shoes = [
            {
                title:"Men SB Delta Force Vulc Skateboarding Shoes",
                price: "2337",
                image: "https://m.media-amazon.com/images/I/81FZwSTunoL._AC_UL320_.jpg",
                tag: "shoes"
            },
            {
                title: "Low TOP Smoke Grey/Black-Light Bone Basketball Shoes ",
                price: "4467",
                image: "https://m.media-amazon.com/images/I/81MaeSqKGtL._AC_UL320_.jpg",
                tag: "shoes"
            },
            {
                title: "Men's Air Force 1 '07 PRM Ww Sneaker",
                price: "8710",
                image: "https://m.media-amazon.com/images/I/81LMWXU-a2L._AC_UL320_.jpg",
                tag: "shoes"
            },
            {
                title: "Adidas Men's Marlin 4.0 M Mesh Sneakers",
                price: "3467",
                image: "https://m.media-amazon.com/images/I/81RQH+zPWIL._AC_UL320_.jpg",
                tag: "shoes"
            }
        ]
    
    return (
        <Container>
           <Navbar>
                <Navitems/>
           </Navbar>
            <Content>
            <SlideImage>
               <SimpleSlider/>
           </SlideImage>

           <ShopMenus>
               <span>All Departments</span>
           </ShopMenus>

           <Items>
                {phone.map((all)=>(
            <Product
                 title={all.title}
                 price={all.price}
                 image={all.image}
            
            />
                ))}
            </Items>
            <Items>
                {all.map((all)=>(
            <Product
                 title={all.title}
                 price={all.price}
                 image={all.image}
            
            />
                ))}
            </Items>
            <Items>
                {watch.map((all)=>(
            <Product
                 title={all.title}
                 price={all.price}
                 image={all.image}
            
            />
                ))}
            </Items>
            <Items>
                {shoes.map((all)=>(
            <Product
                 title={all.title}
                 price={all.price}
                 image={all.image}
            
            />
                ))}
            </Items>
        </Content>
           
        </Container>
    )
}

export default Home

const Items = styled.div`
display: flex;
width: 900px;
padding-left: 50px;
margin-top: 20px;
`

const Content = styled.div`
height: 250px;
width: 900px;
margin: 0 auto;
`
const ShopMenus = styled.div`
display: flex;
padding-left: 30px;
margin-top: 20px;
font-weight: 700;
color: #000000;
span{
    margin-right: 20px;
    padding: 8px 16px;
    cursor: pointer;
}
span:after{
    display:block;
    content: '';
    border-bottom: solid 3px #019fb6;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
}
span:hover:after { 
    flex-wrap: wrap;
    transform: scaleX(1); 
}
span.fromRight:after{
     transform-origin:100% 50%; 
    }
span.fromLeft:after{
      transform-origin:  0% 50%; 
}
`

const Container = styled.div`
display: flex;
`
const Navbar = styled.div`
position: fixed;
`

const SlideImage = styled.div`
height: 250px;
width: 900px;
padding-left: 50px;
margin: 0 auto;
`
