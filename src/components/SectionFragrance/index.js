import React from 'react'
import { Link } from 'react-router-dom'
import mensFragrance from './../../assets/mensFragrance.jpg'
import womensFragrance from './../../assets/womensFragrance.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { HpMensFragrance } from './../../components/Button'
import { HpWomensFragrance } from './../../components/Button'
import './styles.scss'

const SectionFragrance = props => {
    return (

        <Container style={{ marginBottom: '90px', marginTop: '90px'}} fluid>
            <Row style={{  display: 'flex', alignItem: 'center', justifyContent: 'center' }}>
                <Col xs={6} sm={6} md={4} lg={6}  style={{ position: 'relative', width: '100%', margin: '20px 30px', height: '900px', maxHeight: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${mensFragrance})` }}>
                    {HpMensFragrance.map((item, index) => {
                        return (<button key={item.index} className={item.cName}><Link to={'/shop/fragrance/mens'}>{item.title}</Link></button>)
                    })}
                </Col>
                <Col xs={6} sm={6} md={4} lg={6} style={{  width: '100%', margin: '20px 30px', height: '900px', maxHeight: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${womensFragrance})` }}>
                {HpWomensFragrance.map((item, index) => {
                        return (<button key={item.index} className={item.cName}><Link to={'/shop/fragrance/womens'}>{item.title}</Link></button>)
                    })}
                </Col>
            </Row>
        </Container> 
    )
}

export default SectionFragrance;
