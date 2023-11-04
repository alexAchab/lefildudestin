//Count results
let count = 1;

//Pin scrolling to bottom with news results
const scrollToBottom = () => {
    const resultsDiv = document.getElementById('results');
    const anchorDiv = document.getElementById('anchor');
    resultsDiv.scrollTop = anchorDiv.offsetTop;
}

//Roll the dices!
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

    const anchor = document.getElementById('anchor');
    const results = document.getElementById('results');

    //Results in HTML paragraphs
    let resultParagraph = document.createElement('p');
    resultParagraph.classList.add("result");
    results.insertBefore(resultParagraph, anchor);
    resultParagraph.textContent = `#${count} - Le destin a jeté les dés : `;

    //Numbers within a span for CSS
    let resultSpan = document.createElement('span');
    resultParagraph.appendChild(resultSpan);
    resultSpan.textContent = result;

    count++;

    scrollToBottom();
};

document.getElementById('roll').addEventListener('click', rollDice);
