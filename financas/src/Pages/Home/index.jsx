import styles from '../../css/home.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Caixas } from '../../Components/home/caixas';
import { Valor } from '../../Components/home/valor';
import { Button } from '../../Components/home/button';
import { Tabela } from '../../Components/home/table';
import { api } from '../../services/api';
import { useCallback, useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/auth'




export const Home = () => {

    const { userId } = useContext(AuthContext);
    const [dados, setDados] = useState([]);
    const [entrada, setEntrada] = useState(0);
    const [saida, setSaida] = useState(0);

    const fetchData = useCallback(async () => {
        if (userId) {
            try {
                const response = await api.get(`http://localhost:3334/buscarGasto/${userId}`);
                setDados(response.data);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        }
    }, [userId]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        const entradaTotal = dados.filter(item => item.tipo === "Entrada").reduce((sum, item) => sum + item.valor, 0);
        const saidaTotal = dados.filter(item => item.tipo === 'Saida').reduce((sum, item) => sum + item.valor, 0);
        setEntrada(entradaTotal);
        setSaida(saidaTotal);
    }, [dados]);

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
                                {entrada} R$
                            </Valor>
                        </Caixas>
                    </Col>
                    <Col>
                        <Caixas>
                            <p className={styles.saidas}>Saidas</p>
                            <Valor>
                                {saida} R$
                            </Valor>
                        </Caixas>
                    </Col>
                    <Col>
                        <Caixas>
                            <p className={styles.total}>Total</p>
                            <Valor>
                                {entrada - saida} R$
                            </Valor>
                        </Caixas>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tabela />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}