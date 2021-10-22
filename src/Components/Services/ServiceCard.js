import { Typography,Button } from '@material-ui/core'
import React from 'react'
import { Container,Col } from 'react-bootstrap'

const ServiceCard = ({}) => {
    return (
        <Container>
            <Col sm={4} md={4} lg={2}>
                <div>
                    <img src='https://cdn.porch.com/bootstrap/0web/done/859-appliance-installation-small.jpg' alt=""/>

                </div>
                <Typography>
                    Art Hanging
                </Typography>
                <Button variant="outlined">$180</Button>
            </Col>
        </Container>
    )
}

export default ServiceCard
