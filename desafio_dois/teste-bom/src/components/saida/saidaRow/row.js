import React from 'react'
import { Row, Col } from 'react-grid-system'
import './row.css'

const SaidaRow = ({ numero, prestacao, juros, amortizacao, saldoDevedor }) => {
    return (
        <Row className='table-row'>
            <Col className='saida-row-col' id='number'>{numero}</Col>
            <Col className='saida-row-col'>R$ {prestacao.toLocaleString('pt-br')}</Col>
            <Col className='saida-row-col' >R$ {juros.toLocaleString('pt-br')}</Col>
            <Col className='saida-row-col'>R$ {amortizacao.toLocaleString('pt-br')}</Col>
            <Col className='saida-row-col'>R$ {saldoDevedor.toLocaleString('pt-br')}</Col>            
        </Row>
    )
}

export default SaidaRow