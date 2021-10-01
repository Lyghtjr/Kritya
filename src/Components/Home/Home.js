import React from 'react'
import styled from 'styled-components'
import { Search,Intro } from '../../Components'
import useStyle from '../../Styles/HomeStyle'
const Home = () => {
    const classes = useStyle();
    return (
        <Container>
            <Intro/>
        </Container>
    )
}

export default Home

const Container = styled.div`
margin:100px 20px 0px 20px;


`;
