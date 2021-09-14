//index.js
// Comandos utilizando promise-redis
(async () =>{

    // chamando pacote redis encapsulado no promise ===> promise javascript:  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises
    const redis = require('promise-redis')();
    const client = redis.createClient();
    
    // COMANDOS CRUD:

    //SET (create - Adicionando dados no DB 'chave':'valor')
    const result = await client.set('Star Wars I','A new hope');
    console.log(result);

    //SET (create - Adicionando dados no DB 'chave':'valor')
    const result1 = await client.set('Star Wars II','The empire strikes back');
    console.log(result1);

    //GET (read - Lendo dados 'valor' do DB utilizando a 'chave')
    const result2 = await client.get('Star Wars I');
    console.log(result2);

    //GET (read - Lendo dados 'valor' do DB utilizando a 'chave')
    const result3 = await client.get('Star Wars II');
    console.log(result3);

    //DEL (delete - apagando dados do DB utilizando a 'chave')
    const result4 = await client.del('Star Wars I');
    console.log(result4);

    //GET (read - Lendo dados 'valor' do DB utilizando a 'chave' que foi apagada)
    const result5 = await client.get('Star Wars I');
    console.log(result5);

    //GET (read - Lendo dados 'valor' do DB utilizando a 'chave')
    const result6 = await client.get('Star Wars II');
    console.log(result6);

    //SET (update - Adicionando dados de 'valor' no DB já existente, obtendo comportamento atualização utilizando 'chave')
    const result7 = client.set('Star Wars II', 'O império contra ataca');
    console.log(result7);

    //GET (read - Lendo dados 'valor' do DB utilizando a 'chave')
    const result8 = await client.get('Star Wars II');
    console.log(result8);

        /*  FORMATO QUE  DEVE APARECER NO TERMINAL:

        1- A new hope
        2- The empire strikes back
        3- 1        
        4- null     
        5- The empire strikes back
        6- Promise {<pending>}
        7- O império contra ataca
        */
})();
