import React from 'react'
import styled from 'styled-components'

function Product(props) {
    
    return (
        <Container>
            <Content>
            <span>{props.title}</span>
            <h1>Price: $ {props.price}</h1>
                <Image>
                    <img src={props.image} />
                </Image>

            </Content>
            <Button>Add To Cart</Button>
        </Container>
    )
}

export default Product

const Container = styled.div`
  width: 200px;
  height: 280px;
  margin-right: 50px;
  background-color: #fff;
  -moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow:         3px 3px 5px 6px #ccc;
`

const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex-grow: 0;
flex-shrink: 0;
span{
    padding-bottom: 16px;
    font-size: 12px;
    font-weight: 550;
    z-index: 3;
    width: 180px;
    height: 50px;
   color: #2a9ac7;
   margin: 0 auto;
   text-align: center;
    
}
h1{
    font-size: 20px;
    font-weight: 550;
    z-index: 3;
    margin-left: 10px;
}

`
const Image = styled.div`
display: flex;
height: 180px;
width: 180px;
align-items: center;
justify-content: center;
img{
    margin-top: -60px;
    align-items: center;
    height: 70%;
    width: 70%;
}
`
const Button = styled.button`
display: flex;
margin: 0 auto;
width: 100px;
height: 30px;
justify-content: center;
align-items: center;
margin-top: -50px;
background-color: #fac666;
border-radius: 5px;
cursor: pointer;
:focus{
   outline: none;
}

`
