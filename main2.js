var pedro = {
    nome: 'Pedro',
    idade: 20,
    sexo: 'M',
    irmãos: [],
    curso: engenhariaDeComputacao,

}
var ana = {
    nome: 'Ana',
    idade: 17,
    sexo:  'F',
    irmãos: [],
    curso: engenhariaDeComputacao,

}
var paulo = {
    nome: 'Paulo',
    idade: 23,
    sexo: 'M',
    irmãos: [],
    curso: '',

}
var armando = {
    nome: 'Armando',
    idade: 17,
    sexo: 'M',
    irmãos: [],
    curso: '',

}
var engenhariaDeComputacao = {
    nome: "Engenharia de Computação",
    periodos: '10 períodos',
    cargaHoraria: "3630 horas de carga horária",
}
var universidade = {
    nome: 'UFOP',
    curso: engenhariaDeComputacao.nome,

}



var republica = {
    nome: "República Orfanato",
    idade: "10 anos",
    moradores: [" 3 pessoas mais ",],

}
var garcom = {
    garcom: "Garçom",
    nome: "André",
}
var clubeDaCerveja = {
    nome: "Clube da Cerveja",
    garcom: garcom.nome,
    
}
if(clubeDaCerveja.garcom == 'André') {
    function checarIDs(idade, nome){
        if(idade >= 18) {
            console.log(nome + ' pode tomar cerveja')
        } else if(idade < 18) {console.log (nome + ' vai tomar Coca-Cola')}}
    } else {console.log('Não é o André')}

republica.moradores.push(ana.nome)
republica.moradores.push(armando.nome)

pedro.irmãos.push(ana.nome)
ana.irmãos.push(pedro.nome)
