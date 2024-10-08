import Table from 'react-bootstrap/Table';
import styles from './table.module.css'
import { useEffect, useState, useContext, useCallback } from 'react';
import { api } from '../../services/api';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../context/auth'
import { PopUp } from './popUp';


export const Tabela = (onUpdate) => {

    const [dados, setDados] = useState([])
    const { userId } = useContext(AuthContext);
    const [showMyComponent, setShowMyComponent] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);

    const handleOpenModal = (item) => {
        setSelectedItem(item)
        setShowMyComponent(true)
    }

    const handleCloseModal = () => {
        setShowMyComponent(false)
        setSelectedItem(null)
    }

    const fetchData = useCallback(async () => {
        try {
            const response = await api.get(`https://financas-server-5zow.onrender.com/buscarGasto/${userId}`);
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
            const response = await api.get(`https://financas-server-5zow.onrender.com/buscarGasto/${userId}`);
            setDados(response.data);

            if (typeof onUpdate === 'function') {
                await onUpdate();
            }
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    const deleteColumn = async (item) => {
        try {
            await api.delete(`/deletarGasto/${item.id}`);
            await updateTable();
        } catch (error) {
            console.error("Erro ao tentar deletar gasto!", error);
        }
    };

    return (
        <>
            <Table striped bordered hover variant='dark' responsive="lg" className={styles.table}>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Tipo</th>
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
                            <td className={item.tipo === "Entrada" ? styles.entrada : styles.saida}>{item.tipo}</td>
                            <td className={item.tipo === "Entrada" ? styles.entrada : styles.saida}>{item.createdAt}</td>
                            <td>
                                <Button
                                    variant='success'
                                    className={styles.editar}
                                    onClick={() => handleOpenModal(item)}>Editar
                                </Button>
                                <Button
                                    variant='danger'
                                    onClick={() => deleteColumn(item)}
                                    className={styles.excluir}>Excluir
                                </Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
            {showMyComponent && (
                <PopUp
                    show={showMyComponent}
                    handleClose={handleCloseModal}
                    updateTable={updateTable}
                    item={selectedItem}
                />
            )}

        </>

    );
};

