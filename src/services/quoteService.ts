import axios from 'axios';

export const fetchQuote = async () => {
  try {
    const response = await axios.get('https://zenquotes.io/api/random');
    return response.data[0].q;  
  } catch (error) {
    console.error('Error fetching quote', error);
    return 'Stay motivated!';
  }
};
