console.log("ciao")

const parola = process.argv[2];




const vocal = (elem) => {
    let c = 0;
    for (let i = 0; i < elem.length; i++){
        if((elem[i] === "a") || (elem[i] === "e") || (elem[i] === "i") || (elem[i] === "o") || (elem[i] === "u")){
            c++
        }
    }
    return c
}


const numberVocal = vocal(parola.toLowerCase());

console.log("nella parola " + parola + " che mi hai dato ci sono:" + numberVocal + " vocali")