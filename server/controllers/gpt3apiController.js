//get the api key from openai
const apiKey = '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';

//user skin type or allergy?
const userSkinType = 'dry';
const userAllergy = 'eczema';

const userPrompt = `I have ${userSkinType} skin and my allergic type is ${userAllergy}. Can you recommend skincare products that are safe for me?`;

//API call
fetch('https://api.openai.com/v1/engines/davinci/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: userPrompt,
    max_tokens: 100, // Adjust the number of tokens as needed
  }),
})
.then(response => response.json())
.then(data => {
   // the generated text from the response 
   const gpt3Recommendation = data.choices[0].text;

   // Split the recommendation into separate product entries
   const productEntries = gpt3Recommendation.split(', ');

   // Parse product entries into JSON objects(only get the first 5 products from the productRecommendations)
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

    // Display product recommendations
    productRecommendations.forEach(product => {
        console.log('Product Name:', product.name);
        console.log('Category:', product.category);
        console.log('Active Ingredients:', product.activeIngredients.join(', '));
        console.log('Skin Type:', product.skinType);
        console.log('Description:', product.description);
        console.log('------------------------');
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });