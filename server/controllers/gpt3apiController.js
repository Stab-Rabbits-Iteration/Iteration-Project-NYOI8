const fetch = require('node-fetch'); 

const API_URL = 'https://api.openai.com/v1/engines/davinci/completions';
const API_KEY = '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';

async function getSkincareProductRecommendations(userSkinType, userSkinConcerns, userAllergies) {
  const userPrompt = `I have ${userSkinType} skin, with skin concerns related to ${userSkinConcerns.join(', ')} and allergies to ${userAllergies.join(', ')}. Can you recommend skincare products that are safe for me?`;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: userPrompt,
      max_tokens: 100, // Adjust the number of tokens as needed
    },
  )};

  try {
    const response = await fetch(API_URL, requestOptions);
    if (!response.ok) {
      throw new Error(`GPT-3 API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    const gpt3Recommendation = data.choices[0].text;
    const productEntries = gpt3Recommendation.split(', ');

    const productRecommendations = productEntries.slice(0, 5).map(entry => {
      const [name, category, ...activeIngredients] = entry.split(': ');
      return {
        name,
        category,
        activeIngredients,
        skinType: userSkinType,
        description: `Description of ${name}`,
      };
    });

    return productRecommendations;
  } catch (error) {
    throw new Error(`GPT-3 API request failed: ${error.message}`);
  }
}

module.exports = { getSkincareProductRecommendations };
