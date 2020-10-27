import React from 'react'
import EntradaRow from './row/row'
import { Container, Row, Col } from 'react-grid-system'
import { For } from 'react-loops'
import './inputBlock.css'
import SaidaScript from '../../scripts/outputBlockScript'

const Calculos = require('../../scripts/calculos')

const InputBlock = () => {

    const rows = [ [ 'Valor', 'R$' ], [ 'Valor Entrada', 'R$' ], [ 'Número de Prestações', '---' ], [ 'Taxa de Juros (% ao ano)', '%' ]  ]

    const calculoPrestacoesAndInsert = () => {
        const valor = document.getElementById("entrada_row_input_0").value
        const valorEntrada = document.getElementById("entrada_row_input_1").value
        const numeroPrestacoes = document.getElementById("entrada_row_input_2").value
        const juros = document.getElementById("entrada_row_input_3").value

        const prestacaoValor = Calculos.calculoPrestacoes( valor, valorEntrada, numeroPrestacoes, juros )

        if (prestacaoValor) {
            SaidaScript.insertTableRows( prestacaoValor, juros, valor - valorEntrada )
        }
    }

    return (
        <Container className = "input_block">
            <For of = { rows } >
                {
                    (row, {key}) => <EntradaRow label={row[0]} icon = {row[1]} index = {key} ></EntradaRow>
                }
            </For>
            <Row>
                <Col></Col>
                <Col><button className="input_block_button" onClick={calculoPrestacoesAndInsert}>Calcular</button></Col>
            </Row>
        </Container>
    )
}

export default InputBlock