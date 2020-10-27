import React from 'react'
import './outputBlock.css'
import { Container, Row, Col } from 'react-grid-system'

const OutputBlock = ({valorPrestacoes, numParcelas, juros, saldo}) => {
    return (
        <div className='output-block'>
            <Container className = 'output-block-container'>
                <h2>
                <Row>
                    <Col><label>Valor das Prestações</label></Col>
                    <Col  className = 'output-block-valor'><label>R$ {valorPrestacoes.toLocaleString('pt-br')}</label></Col>
                </Row>
                </h2>
                <Row className = "header-row">
                    <Col className='saida-row-col-block'>N°</Col>
                    <Col className='saida-row-col-block'>Prestação</Col>
                    <Col className='saida-row-col-block'>Juros</Col>
                    <Col className='saida-row-col-block'>Amortização</Col>
                    <Col className='saida-row-col-block'>Saldo Devedor</Col>            
                </Row>
                <Row>
                    <Col>
                        <Container id={'output-block-container'}>
                        </Container>
                    </Col>
                </Row>
                <Row className = 'footer-row'>
                    <Col className='saida-row-col-block' id='totais'>TOTAIS</Col>
                    <Col className='saida-row-col-block'>R$ {(valorPrestacoes*numParcelas).toLocaleString('pt-br')}</Col>
                    <Col className='saida-row-col-block' >R$ {juros.toLocaleString('pt-br')}</Col>
                    <Col className='saida-row-col-block'>R$ {saldo.toLocaleString('pt-br')}</Col>
                    <Col className='saida-row-col-block'>---</Col>            
                </Row>
            </Container>
        </div>
    )
}

export default OutputBlock