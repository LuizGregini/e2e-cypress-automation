it('Hello World', function(){})

console.log("teste")

function soma1(a, b){
    return a + b;
}

const soma2 = function(a, b){
    return a + b;
}

const soma3 = (a, b) =>{
    return a + b; 
}

const soma4 = (a, b) => a + b;

const soma5 = a => a + a;

it('Um teste de função', function(){
    console.log('Function', this);
})

it('Teste com arrow que é UNDEFINED', () => {
    console.log('Function', this);
})

it('Passa teste UNDEFINED', () => console.log('Function', this));



console.log(soma1(1,2));
console.log(soma2(3,3));
console.log(soma3(7,7));
console.log(soma3(7,9));
console.log(soma3(10,10));