import axios from 'axios';

const API_KEY = 'AIzaSyAvrOVawYO6eTQDVV8DWpcGFgYWx0NNzNc';
const BASE_URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`;

export const getFonts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    // Extract font details from the response
    return response.data.items.map(font => ({
      family: font.family,
      category: font.category,
      kind: font.kind,
      version: font.version,
      subsets: font.subsets,
      // You may need to find additional data sources for author and license
      // For example, author and license details might be available on the Google Fonts website
    }));
  } catch (error) {
    console.error('Error fetching fonts:', error);
    throw error;
  }
};
