
function saldoRanqueadas(vitorias, derrotas){
    let saldo = (vitorias - derrotas)

    if (saldo <= 10){
        return `O Herói tem de saldo de ${saldo} está no nível de Ferro`
    } else if(saldo >= 11 && saldo <= 20){
        return `O Herói tem de saldo de ${saldo} está no nível de Bronze`
    }   else if(saldo >= 21 && saldo <= 50){
        return `O Herói tem de saldo de ${saldo} está no nível de Prata`
    }   else if(saldo >= 51 && saldo <= 80){
        return `O Herói tem de saldo de ${saldo} está no nível de Ouro`
    }   else if(saldo >= 81 && saldo <= 90){
        return `O Herói tem de saldo de ${saldo} está no nível de Diamante`
    }   else if(saldo >= 91 && saldo <= 100){
        return `O Herói tem de saldo de ${saldo} está no nível de Lendário`
    }   else if(saldo >= 101){
        return `O Herói tem de saldo de ${saldo} está no nível de Imortal`
    }
}   

console.log(saldoRanqueadas(150, 5))