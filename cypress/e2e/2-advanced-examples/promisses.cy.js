it('Sem testes aindaa', ()=>{})

const getSomething = () => 10;

const getSomething2 = () =>{
    setTimeout(() => {
        console.log('Respondendo...')
        return 11;
    }, 1000)
}

const getSomething4 = (callback) =>{
    setTimeout(() => {
        callback(13);
    }, 2000)
}

const getSomething5 = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(17);
        }, 2000)
    })
}

const system = () =>{
    console.log('init');
    const something = getSomething;
    console.log(`Something is ${something}`);
    console.log('end');
}

const system2 = () =>{
    console.log('init2');
    console.log(`Something is ${getSomething()}`);
    console.log('end2');
}

const system3 = () =>{
    console.log('init3');
    console.log(`Something is ${getSomething2()}`);
    console.log('end3');
}

const system4 = () =>{
    console.log('init4');
    getSomething4(some => {
        console.log(`Something is ${some}`);
        console.log('end..');
    })
}


system();
system2();
system3();
system4();
system5();

