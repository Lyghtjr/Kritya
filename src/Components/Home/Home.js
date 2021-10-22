import React from 'react'
import styled from 'styled-components'
import { ServiceList,Intro } from '../../Components'
import useStyle from '../../Styles/HomeStyle'
const Home = () => {
    const classes = useStyle();
    return (
        <Container>
            <Intro/>
            <ServiceList/>
        </Container>
    )
}

export default Home

const Container = styled.div`
margin:100px 20px 0px 20px;


`;
