const rollDice = () => {
    const getIntegerValue = (elementId, defaultValue = 0) => {
        const value = parseInt(document.getElementById(elementId).value);
        return isNaN(value) ? defaultValue : value;
    };

    const numDice = getIntegerValue('numDice', 1);
    const numFaces = getIntegerValue('numFaces', 6);
    const bonusNumDice = getIntegerValue('bonusNumDice');
    const bonusNumFaces = getIntegerValue('bonusNumFaces');

    const roll = (numDice, numFaces) => {
        return Array.from({ length: numDice }, () => Math.floor(Math.random() * numFaces) + 1).reduce((acc, curr) => acc + curr, 0);
    };

    const result = roll(numDice, numFaces) + roll(bonusNumDice, bonusNumFaces);

    let resultParagraph = document.getElementById('result');
    if (!resultParagraph) {
        resultParagraph = document.createElement('p');
        resultParagraph.id = 'result';
        document.getElementById('results').appendChild(resultParagraph);
    }

    resultParagraph.textContent = `Résultat : ${result}`;
};

document.getElementById('roll').addEventListener('click', rollDice);


