import {Container, Row, Col, Button} from 'react-bootstrap'
function RowAndColumn(){
    return(
        /* 
            xs = Extra Small (<= 576 PX)
            sm = Small (>= 576 PX)
            md = Medium (>= 768 PX)
            lg = Large (>= 992 PX)
            xl = Extra Large (>= 1200 PX)
            xxl = Extra Extra Large (>= 1400 PX)
        */
        <Container>
            <Row>
            <Col xxl="1" xl="2" lg="3" sm="4" xs="6" className="bg-primary">1</Col>
            <Col xxl="1" xl="2" lg="3" sm="4" xs="6" className="bg-secondary">2</Col>
            <Col xxl="1" xl="2" lg="3" sm="4" xs="6" className="bg-success">3</Col>
            <Col xxl="1" xl="2" lg="3" sm="4" xs="6" className="bg-danger">4</Col>
            <Col xxl="1" xl="2" lg="3" sm="4" xs="6" className="bg-info">5</Col>
            <Col xxl="1" xl="2" lg="3" sm="4" xs="6" className="bg-warning">6</Col>
            <Col xxl="1" xl="2" lg="3" sm="4" xs="6" className="bg-primary">7</Col>
            <Col xxl="1" xl="2" lg="3" sm="4" xs="6" className="bg-secondary">8</Col>
            <Col xxl="1" xl="2" lg="3" sm="4" xs="6" className="bg-success">9</Col>
            <Col xxl="1" xl="2" lg="3" sm="4" xs="6" className="bg-danger">10</Col>
            <Col xxl="1" xl="2" lg="3" sm="4" xs="6" className="bg-info">11</Col>
            <Col xxl="1" xl="2" lg="3" sm="4" xs="6" className="bg-warning">12</Col>
            </Row>
        </Container>
    )
}

export default RowAndColumn;