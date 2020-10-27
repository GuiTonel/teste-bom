import ReactDOM from 'react-dom'
import React from 'react'
import SaidaRow from '../components/saida/saidaRow/row'
import OutputBlock from '../components/saida/outputBlock'
import Utils from './utils'


class OutputBlockScript {
    insertTableRows( prestacao, juros, saldo ) {

        let saldoInteiro = saldo
        let i = -1
        let prestacaoLoop = prestacao
        let jurosLoop = 0
        let jurosTotal = 0
        let amortizacao  = 0
        juros = juros/100

        const rows = []

        while (true) {          
            i += 1
            if ( i == 0 ) {
                rows.push( <SaidaRow numero={i} prestacao={0} juros={0} amortizacao={0} saldoDevedor={saldo} /> )
                continue
            }
            jurosLoop = Utils.arrendondarDuasCasas(juros * saldo)
            amortizacao  = Utils.arrendondarDuasCasas(prestacaoLoop - jurosLoop)
            saldo = Utils.arrendondarDuasCasas(saldo - amortizacao)
            if (saldo < 0 ) break
            jurosTotal += jurosLoop
            rows.push( <SaidaRow numero={i} prestacao={prestacaoLoop} juros={jurosLoop} amortizacao={amortizacao} saldoDevedor={saldo} /> )
        }
        ReactDOM.render( <OutputBlock valorPrestacoes={prestacao} numParcelas = {i} juros = {jurosTotal} saldo={saldoInteiro}/>, document.getElementById('output-block')  )
        ReactDOM.render( rows, document.getElementById('output-block-container') )        
    }
}

export default new OutputBlockScript()