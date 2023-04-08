import React from 'react'
import styled from 'styled-components'

const Button = ({bg,content,color}) => {
  return (
    <Cover bg={bg} color={color}>{content}</Cover>
  )
}

export default Button

const Cover = styled.div`
    display:inline;
    padding:7px 10px ;
    background: ${({bg})=>bg};
    border:1px solid #fff;
    border-radius:7px;
    color:${({color})=>color}
`;