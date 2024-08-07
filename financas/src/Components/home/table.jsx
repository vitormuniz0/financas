import Table from 'react-bootstrap/Table';
import styles from './table.module.css'
import { useEffect, useState, useContext, useCallback } from 'react';
import { api } from '../../services/api';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../context/auth'


export const Tabela = () => {

    const [dados, setDados] = useState([])

    const { userId } = useContext(AuthContext);

    const fetchData = useCallback(async () => {
        try {
            const response = await api.get(`http://localhost:3334/buscarGasto/${userId}`);
            setDados(response.data);
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    }, [userId]);

    useEffect(() => {

        fetchData();

    }, [fetchData]);
    
    const updateTable = async () => {
        try {
            const response = await api.get(`http://localhost:3334/buscarGasto/${userId}`);
            setDados(response.data); // Atualizar os dados da tabela com os dados mais recentes
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };




    return (
        <Table striped bordered hover variant='dark' responsive="lg" className={styles.table}>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data/hora</th>
                    <th>Gerenciar</th>
                </tr>
            </thead>
            <tbody>
                {dados.map((item, index) => (
                    <tr key={index}>
                        <td className={item.tipo === "Entrada" ? styles.entrada : styles.saida}>{item.descricao}</td>
                        <td className={item.tipo === "Entrada" ? styles.entrada : styles.saida}>{item.valor}</td>
                        <td className={item.tipo === "Entrada" ? styles.entrada : styles.saida}>{item.categoria}</td>
                        <td className={item.tipo === "Entrada" ? styles.entrada : styles.saida}>{item.createdAt}</td>
                        <td>
                            <Button variant='success' className={styles.editar}>Editar</Button>
                            <Button variant='danger' className={styles.excluir}>Excluir</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

