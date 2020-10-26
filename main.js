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

/**
 * @description allows to retrieve the number of quotes typed in and converts it into an integer
 * @param {*} valueInString wished number of quotes to generate
 * @returns an integer of quotes wished by the user
 */
getNumberOfQuotes = (valueInString) => {
    parsedNumberOfQuotesToGenerate = parseInt(valueInString);
    if (isNaN(parsedNumberOfQuotesToGenerate)){
        warningText.innerText = "Veuillez choisir un nombre de citations à générer.";
        return 0;
    } else if (parsedNumberOfQuotesToGenerate <= 0 || parsedNumberOfQuotesToGenerate > 5){
        warningText.innerText = "Veuillez choisir un nombre de citations à générer compris entre un et cinq.";
        return 0;
    } 
    warningText.innerText = "";
    return parsedNumberOfQuotesToGenerate;
}

/**
 * @description allows to retrieve the selected type of quotes
 * @returns the type selected by the user (by default, type 1 is selected)
 */
getSelectedType = () => {
    for (let i = 0; i < typeRadioElts.length; i++) {
        if (typeRadioElts[i].checked) {
            return typeRadioElts[i].value;
        } 
    }
}

submitElt.addEventListener('click', function(){
    const numberOfQuotes = getNumberOfQuotes(quoteNumberElt.value);
    const selectedType = getSelectedType()
    
    //calls the generateQuotes function
    const generatedQuotesArr = generateQuotes(numberOfQuotes, phrases, selectedType);
    quoteListElt.innerHTML = ('');
    for (let i = 0; i < generatedQuotesArr.length; i++) {
        const quoteLiElt = document.createElement('li');
        quoteLiElt.innerHTML = generatedQuotesArr[i].sentence;
        quoteListElt.appendChild(quoteLiElt);    
    }  
})
