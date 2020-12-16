import axios from 'axios';

const wordAPI = "https://random-word-api.herokuapp.com/word?number=10";
const definitionAPI = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"; //voluminous?key=your-api-key"
const definitionKey = process.env.REACT_APP_MW_API_KEY;
let definitions = [];
function getWords() 
{
    let list = [];

    axios.get(wordAPI).then(function (result) 
    {
        list = result.data;

        for (let i = 0; i < list.length; i++) 
        {
            let currentWord = list[i];
            let URI = definitionAPI + currentWord + "?key=" + definitionKey;
            getDefinition(currentWord, URI);
        }
    });
    return definitions;
}

function getDefinition(currentWord, mwURI) 
{
    let wordWithDefinition = {};

    axios.get(mwURI).then(function (result) 
    {
        wordWithDefinition = 
        {
            word: currentWord,
            def: result.data[0].shortdef
        };
        definitions.push(wordWithDefinition);
    });
}

export { getWords };