import React from 'react';
import netflix from '../../common/netflixroulette.svg';
import { Row, Col } from 'react-bootstrap';
import './styles.css';

class Footer extends React.Component {
    render() {
        return (
                <Row className='netflix-wrapper'>
                    <Col sm={12} className="netflix">
                        <img src={netflix} alt="Netflix" />
                    </Col>
                </Row>
        )
    }
}
export default Footer