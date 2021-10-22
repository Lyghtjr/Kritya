
import { Typography,Button, Box, } from '@material-ui/core'
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import useStyles from '../../Styles/IntroStyle';
const Intro = () => {
    const classes = useStyles();
    return (
        <Container>
            <Row style={{justifyContent:'space-between',alignItems:'center'}}>
                <Col sm={12} md={6}>
                    <div>
                        <Typography variant="h4" gutterBottom> 
                        Moving, improving, and everything in between.
                        </Typography>
                        <Typography variant="p" ><strong className={classes.purple}>kritya</strong> makes moving, insurance, and improving your home, simple.</Typography>
                     <hr/>
                        <Button variant="contained" type="button" style={{backgroundColor:'#c95bf5',color:'#fff'}}>What We Offer</Button>
                    </div>
                </Col>
                <Col sm={6} xs-hidden>
                    <img className={classes.introImg} src="https://cdn.porch.com/bootstrap/0web/home-page/hero-cluster@2x.png" alt=""/>
                </Col>
            </Row>

           {/* <img src="https://cdn.porch.com/bootstrap/0web/home-page/paths/path-1-with-section-nav.svg" alt="" /> */}
            
        </Container>
    )
}

export default Intro
