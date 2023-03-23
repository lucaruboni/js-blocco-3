/* 
Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array. */



const auto = [
    {
        marca: "ford",
        modello: "mustang",
        alimentazione: "benzina" 
    },

    {
        marca: "fiat",
        modello: "topolino",
        alimentazione: "benzina" 
    },

    { 
        marca: "tesla",
        modello: "model x",
        alimentazione: "elettrica" 
    },

    {
        marca: "porsche",
        modello: "cayenne",
        alimentazione: "diesel" 
    },

    {
        marca: "fiat",
        modello: "punto",
        alimentazione: "gpl" 
    },

    {
        marca: "land rover",
        modello: "defender",
        alimentazione: "metano" 
    },
    {
        marca: "ford",
        modello: "ducato",
        alimentazione: "diesel" 
    },

    {
        marca: "jaguar",
        modello: "e-type",
        alimentazione: "benzina" 
    },

    {
        marca: "tesla",
        modello: "roadster",
        alimentazione: "elettrica" 
    }
]





//stampo separatamente i 3 array 

const gasoline = auto.filter((auto) => {
    
    if (auto.alimentazione == 'benzina') {
        return true
    }
    return false
})

console.log(gasoline)



const diesel = auto.filter((auto) => {
    
    if (auto.alimentazione == 'diesel') {
        return true
    }
    return false
})

console.log(diesel)



const other = auto.filter((auto) => {
    
    if (auto.alimentazione == 'elettrica' || auto.alimentazione == 'gpl' || auto.alimentazione == 'metano') {
        return true
    }
    return false
})

console.log(other)