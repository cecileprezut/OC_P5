const getRandomInt = (max) =>{
    return Math.floor(Math.random() * Math.floor(max))
}
class Quote {    
    constructor(data, type){
        //{beginningPhrases: [], middlePhrases: []...}
        const subData = data[type];

        for (const key in subData) {
            if (subData.hasOwnProperty(key)) {
                //string array (content of beginningPhrases, and so on)
                const value = subData[key];
                let i = getRandomInt(value.length);
                const chosenPhrase = value[i];
                this[key] = chosenPhrase;
            }
        }

        this.sentence = this.beginningPhrases + ' ' + this.middlePhrases + ' ' + this.endPhrases
    }
}
