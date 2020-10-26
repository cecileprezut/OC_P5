const phrases  = {
    type1 : {
        beginningPhrases : [
            "Il convient de", 
            "Il faut",
            "On se doit de",
            "Il est préférable de",
            "Il serait intéressant de"
        ],
        
        middlePhrases : [
            "se remémorer", 
            "gérer",
            "favoriser",
            "prendre en considération",
            "comprendre"
        ],
        
        endPhrases : [
            "les solutions. (Type 1)", 
            "les issues. (Type 1)",
            "les problématiques. (Type 1)",
            "les voies. (Type 1)",
            "les alternatives. (Type 1)"
        ]
    },
    type2 : {
        beginningPhrases : [
            "Il convient de", 
            "Il faut",
            "On se doit de",
            "Il est préférable de",
            "Il serait intéressant de"
        ],
        
        middlePhrases : [
            "se remémorer", 
            "gérer",
            "favoriser",
            "prendre en considération",
            "comprendre"
        ],
        
        endPhrases : [
            "les solutions. (Type 2)", 
            "les issues. (Type 2)",
            "les problématiques. (Type 2)",
            "les voies. (Type 2)",
            "les alternatives. (Type 2)"
        ]
    }
    
}



/**
 * @description allows to generate a defined number of quotes
 * @param {*} numberOfQuotesToGenerate wished number of quotes to generate
 * @param {*} dataSet table of phrases
 * @param {*} type type of phrases (type1 or type2)
 * @returns array of quotes
 */
generateQuotes = (numberOfQuotesToGenerate, dataSet, type) => {
    //calls the quote constructor de quotes as many as numberOfQuotesToGenerate times
    const quotes = [];

    for (let i = 0; i < numberOfQuotesToGenerate; i++) {
        quotes.push(new Quote(dataSet, type))
    }
    return quotes;
}

const submitElt = document.getElementById('submit');
const typeRadioElts = document.getElementsByName('type');
const quoteListElt = document.getElementById('quoteList');
const quoteNumberElt = document.getElementById('quoteNumber');
const warningText = document.getElementById('warning');

convertToParsedNumber = (numberOfQuotes) => {
    parsedNumberOfQuotesToGenerate = parseInt(quoteNumberElt.value);
    if (isNaN(parsedNumberOfQuotesToGenerate)){
        warningText.innerText = "Veuillez choisir un nombre de citations à générer."
    } else if (parsedNumberOfQuotesToGenerate <= 0 || parsedNumberOfQuotesToGenerate > 5){
        warningText.innerText = "Veuillez choisir un nombre de citations à générer compris entre un et cinq."
    } else {
        warningText.innerText = "";
    }
}

let selectedType = '';
getSelectedType = (arrayOfRadioElts) => {
    for (let i = 0; i < typeRadioElts.length; i++) {
        if (typeRadioElts[i].checked) {
            selectedType = typeRadioElts[i].value;
        } 
    }
    warningText.innerText = "toto";
    
}

submitElt.addEventListener('click', function(){
    //retrieves the number of quotes typed in and converts it into an integer
    convertToParsedNumber(quoteNumberElt.value);
     
    //retrieves the selected type of quotes
    getSelectedType(typeRadioElts)
    
    //calls the generateQuotes function
    const generatedQuotesArr = generateQuotes(parsedNumberOfQuotesToGenerate, phrases, selectedType);
    quoteListElt.innerHTML = ('');
    for (let i = 0; i < generatedQuotesArr.length; i++) {
        const quoteLiElt = document.createElement('li');
        quoteLiElt.innerHTML = generatedQuotesArr[i].sentence;
        quoteListElt.appendChild(quoteLiElt);    
    }  
})
