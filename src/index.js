function expressionCalculator(expr) {
    if (expr.includes('/ 0') || expr.includes("/0")) {
        throw new Error('TypeError: Division by zero.');
    } else if((expr.match(/\(/g)||[]).length === (expr.match(/\)/g)||[]).length ){
        return Function(`'use strict'; return (${expr})`)()
    } else {
        throw new Error('ExpressionError: Brackets must be paired')
    }
}

module.exports = {
    expressionCalculator
}