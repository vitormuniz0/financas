import styles from '../../css/home.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Caixas } from '../../Components/home/caixas';
import { Input } from '../../Components/home/input';


export const Home = () => {
    return (
        <Container fluid className={styles.container}>
            <div className={styles.cont}>
                <Row>
                    <Col>
                        <h1 className={styles.title}>Controle Financeiro</h1>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Caixas>
                            <p className={styles.entradas}>Entradas</p>
                            <Input/>
                        </Caixas>
                    </Col>
                    <Col>
                        <Caixas>
                            <p className={styles.saidas}>Saidas</p>
                            <Input/>
                        </Caixas>
                    </Col>
                    <Col>
                        <Caixas>
                            <p className={styles.total}>Total</p>
                            <h3 className={styles.valor}>0.00</h3>
                        </Caixas>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}