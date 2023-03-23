/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */




const stringList = [
    'pippo',
    'PLuto',
    'PAPERINO'
]

console.log(stringList)


stringList.forEach((element, index) => {
    

    newElement0 = stringList[0].replace('pippo', 'Pippo')
    

    newElement1 = stringList[1].replace('PLuto', 'Pluto')
    

    newElement2 = stringList[2].replace('PAPERINO', 'Paperino')
    
    element = [newElement0, newElement1, newElement2]

    console.log(element[index])
});
   




