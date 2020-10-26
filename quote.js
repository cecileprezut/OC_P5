class Quote {    
    constructor(data, type){

        const getRandomInt = (max) =>{
            return Math.floor(Math.random() * Math.floor(max))
        }
        //{beginningPhrases: [], middlePhrases: []...}
        const subData = data[type];

        for (const key in subData) {
            if (subData.hasOwnProperty(key)) {
                //tableau de strings (contenu de beginningPhrases, etc.)
                const value = subData[key];
                let i = getRandomInt(value.length);
                const chosenPhrase = value[i];
                this[key] = chosenPhrase;
            }
        }

        this.sentence = this.beginningPhrases + ' ' + this.middlePhrases + ' ' + this.endPhrases
    }
}
