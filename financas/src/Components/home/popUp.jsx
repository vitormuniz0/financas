import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from './popUp.module.css';
import Form from 'react-bootstrap/Form';
import { useState, useContext, useEffect } from 'react';
import ButtonEntrada from './buttonEntrada';
import { api } from '../../services/api';
import { AuthContext } from '../../context/auth'


export const PopUp = ({ show, handleClose, updateTable, item }) => {

    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [categoria, setCategoria] = useState('');
    const [tipo, setTipo] = useState('');
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        if (item) {
            setDescricao(item.descricao || '');
            setValor(item.valor || '');
            setCategoria(item.categoria || '');
            setTipo(item.tipo || '');
        }
    }, [item]);



    const handleRadioChange = (newRadioValue) => {
        setTipo(newRadioValue);
    };



    const handleSave = async () => {

        try {
            const data = {
                descricao,
                valor,
                categoria,
                tipo,
                id_user: userId,
            };

            if (item) {
                await api.put(`/atualizarGasto/${item.id}`, data)
            } else {
                await api.post("/criarGasto", data)
            }
            console.log("Dados enviados com sucesso! ", data);

            if (typeof updateTable === 'function') {
                await updateTable();
            } else {
                console.error("updateTable não é uma função");
            }
            
            alert("Salvo Com Sucesso!")
            handleClose();
            
        } catch (error) {
            console.error("Erro ao tentar salvar Gasto!", error)
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{item ? 'Editar Financeiro' : 'Adicionar Financeiro'}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Control
                    type='text'
                    placeholder='Descrição'
                    className='mb-3'
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <Form.Control
                    type='number'
                    placeholder='Valor'
                    className='mb-3'
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />
                <Form.Select
                    aria-label=""
                    className='mb-3'
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option disabled>Selecione Uma Categoria</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Casa">Casa</option>
                    <option value="Viagem">Viagem</option>
                    <option value="Compras">Compras</option>
                    <option value="Farmácia">Farmácia</option>
                    <option value="Trabalho">Trabalho</option>
                </Form.Select>

                <ButtonEntrada onRadioChange={handleRadioChange} />

                <Button variant="secondary"
                    size='lg'
                    className={styles.buttonSalvar}
                    style={{ alignItems: 'center' }}
                    onClick={handleSave}>
                    Salvar
                </Button>
            </Modal.Body>
        </Modal>
    )
}