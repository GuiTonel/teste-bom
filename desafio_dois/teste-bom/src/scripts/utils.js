class Utils {
    arrendondarDuasCasas( number ) {
        return Number(number.toFixed(2))
    }

    truncateDuasCasas( number ) {
        number = number*100
        number = Math.trunc(number)

        return number/100
    }
}

export default new Utils