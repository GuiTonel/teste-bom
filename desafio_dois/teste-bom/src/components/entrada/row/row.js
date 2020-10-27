import React from 'react'
import './row.css'
import { Row, Col } from 'react-grid-system';

const EntradaRow = ({ label, icon, index }) => {
    const handleFocus = (event) => event.target.select()
    return (
    <Row className="entrada_row">
        <Col className= "entrada_row_label"><label>{label}</label></Col>
        <Col className= "entrada_row_input_col">
            <div className = "entrada_row_icon"><p>{icon}</p></div>
            <input onFocus={ handleFocus } defaultValue={0} className="entrada_row_input" type="number" id = {"entrada_row_input_" + String(index)}/>
        </Col>
    </Row>
)}

export default EntradaRow
