
const gematriaValues = {
    'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8, 'ט': 9,
    'י': 10, 'כ': 20, 'ך': 20, 'ל': 30, 'מ': 40, 'ם': 40, 'נ': 50, 'ן': 50,
    'ס': 60, 'ע': 70, 'פ': 80, 'ף': 80, 'צ': 90, 'ץ': 90, 'ק': 100, 'ר': 200,
    'ש': 300, 'ת': 400
};


function calculateGematria() {
    const input = document.getElementById('input').value;
    const words = input.trim().split(/\s+/);
    let results = [];

    words.forEach(word => {
        let fullGematria = 0;
        for (let char of word) {
            if (gematriaValues[char]) {
                fullGematria += gematriaValues[char];
            }
        }
        const smallGematria = fullGematria
            .toString()
            .split('')
            .reduce((sum, digit) => sum + parseInt(digit), 0);

        results.push({ word, fullGematria, smallGematria });
    });

    displayResults(results);
}


function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    results.forEach(result => {
        const resultLine = document.createElement('p');
        resultLine.textContent = `Word: ${result.word}, Full Gematria: ${result.fullGematria}, Small Gematria: ${result.smallGematria}`;
        resultsDiv.appendChild(resultLine);
    });
}
