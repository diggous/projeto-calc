function calcular() {
    var n1 = document.querySelector('input#n1')
    var n2 = document.querySelector('input#n2')
    var res = document.querySelector('div#res')
    var oper = document.getElementById('oper')
    if (n1.value.length == 0 || n2.value.length == 0) {
        alert('[ERRO] Preencha os campos abaixo para calcular!')
    } else {
        if (oper[0].selected) {
            var result = Number(n1.value) + Number(n2.value)
            res.innerHTML = `${n1.value} + ${n2.value} = ${result}`
        } else if (oper[1].selected) {
            var result = Number(n1.value) - Number(n2.value)
            res.innerHTML = `${n1.value} - ${n2.value} = ${result}`
        } else if (oper[2].selected) {
            var result = Number(n1.value) * Number(n2.value)
            res.innerHTML = `${n1.value} x ${n2.value} = ${result}`
        } else {
            var result = Number(n1.value) / Number(n2.value)
            res.innerHTML = `${n1.value} / ${n2.value} = ${result}`
        }
    }
    res.style.textAlign = 'center'
    
}