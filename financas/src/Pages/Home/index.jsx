import styles from '../../css/home.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Caixas } from '../../Components/home/caixas';
import { Valor } from '../../Components/home/valor';
import { Button } from '../../Components/home/button';
import { Tabela } from '../../Components/home/table';



export const Home = () => {
    return (
        <Container fluid className={styles.containerGeral}>
            <div className={styles.container}>
                <Row>
                    <Col>
                        <h1 className={styles.title}>Controle Financeiro</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button />
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Caixas>
                            <p className={styles.entradas}>Entradas</p>
                            <Valor>
                                0.00 R$
                            </Valor>
                        </Caixas>
                    </Col>
                    <Col>
                        <Caixas>
                            <p className={styles.saidas}>Saidas</p>
                            <Valor>
                                0.00 R$
                            </Valor>
                        </Caixas>
                    </Col>
                    <Col>
                        <Caixas>
                            <p className={styles.total}>Total</p>
                            <Valor>
                                0.00 R$
                            </Valor>
                        </Caixas>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tabela/>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}