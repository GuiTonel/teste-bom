class Calculos {
    calculoPrestacoes( valor, valorEntrada, numeroPrestacoes, juros ) {

        if ( valor == 0  || numeroPrestacoes == 0 ) {
            return false
        }

        valor = valor - valorEntrada
        juros = juros/100

        const prestacao = valor * ( juros / ( 1 - Math.pow( ( 1 + juros ), -numeroPrestacoes ) ) )

        return Number(prestacao.toFixed(2))
    }
}

module.exports = new Calculos()