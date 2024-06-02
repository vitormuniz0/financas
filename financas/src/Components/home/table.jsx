import Table from 'react-bootstrap/Table';
import styles from './table.module.css'
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Button from 'react-bootstrap/Button';


export const Tabela = () =>{

    const [dados, setDados] = useState([])

    useEffect(()=>{

        const fetchData = async () => {
            try {
                const response = await api.get('');
                setDados(response.data);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error)
            }
        };

        fetchData();

    }, [])


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
                        <td>{item.descricao}</td>
                        <td>{item.valor}</td>
                        <td>{item.categoria}</td>
                        <td>{item.dataHora}</td>
                        <td>
                            <Button variant='success'>Editar</Button>
                            <Button variant='danger'>Excluir</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

