import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from './popUp.module.css';
import Form from 'react-bootstrap/Form';

export const PopUp = ({ show, handleClose, children }) => {
    return (

        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Adicionar Financeiro</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Form.Control type='text' placeholder='Descrição' className='mb-3' />
                <Form.Control type='number' placeholder='Valor' className='mb-3' />
                <Form.Select aria-label="" className='mb-3' >
                    <option disabled>Selecione Uma Categoria</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Casa">Casa</option>
                    <option value="Viagem">Viagem</option>
                    <option value="Compras">Compras</option>
                    <option value="Farmácia">Farmácia</option>
                    <option value="Trabalho">Trabalho</option>
                </Form.Select>

                <Button variant="secondary" size='lg' className={styles.buttonSalvar} style={{alignItems:'center' }}>Salvar</Button>

            </Modal.Body>
        </Modal>
    )
}