// Function to perform the currency conversion using API
async function convertCurrency() {
    const amount = parseFloat(document.querySelector('.first input').value);
    const fromCurrency = document.querySelector('.second select').value;
    const toCurrency = document.querySelector('.third select').value;
    const resultElement = document.querySelector('.result');

    if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = 'Please enter a valid amount';
        return;
    }

    if (fromCurrency === toCurrency) {
        resultElement.textContent = `${amount} ${fromCurrency} = ${amount.toFixed(2)} ${toCurrency}`;
        return;
    }

    const apiKey = '54a1190474654ae7021fd92b'; // Replace with your API key
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;
    // const url = "https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}";

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch exchange rates');

        const data = await response.json();
        const conversionRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount * conversionRate).toFixed(2);

        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        resultElement.textContent = 'Error fetching exchange rates. Please try again later.';
        console.error(error);
    }
}

// Event listener for the convert button
document.querySelector('.btn').addEventListener('click', convertCurrency);