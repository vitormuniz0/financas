import { BsCashCoin } from "react-icons/bs";
import styles from './button.module.css';
import { useState } from "react";
import { PopUp } from "./popUp";

export const Button = () => {

    const [showMyComponent, setShowMyComponent] = useState(false)

    const handleOpenModal = () => {
        setShowMyComponent(true)
    }

    const handleCloseModal = () => {
        setShowMyComponent(false)
    }

    return (
        <>
            <BsCashCoin className={styles.button} onClick={handleOpenModal} />
            <PopUp show={showMyComponent} handleClose={handleCloseModal} updateTable={() => {}}/>
        </>
    )
}