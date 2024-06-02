import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import styles from './buttonEntrada.module.css';

function ButtonEntrada({ onRadioChange }) {

  const [radioValue, setRadioValue] = useState('entrada');

  const radios = [
    { name: 'Entrada', value: 'entrada' },
    { name: 'Saida', value: 'saida' },
  ];

  const handleRadioChange = (e) => {
    const newValue = e.currentTarget.value;
    setRadioValue(newValue);
    onRadioChange(newValue);
  }

  return (
    <>
      <ButtonGroup className={styles.button} >
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-danger' : 'outline-success'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={handleRadioChange}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export default ButtonEntrada;