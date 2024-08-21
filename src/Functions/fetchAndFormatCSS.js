import axios from 'axios';

export const fetchAndFormatCSS = async (url) => {
  try {
    const response = await axios.get(url);
    const cssText = response.data;
    
    // Simple formatting of CSS
    const formattedCSS = cssText
      .replace(/\/\*.*?\*\//g, '') // Remove comments
      .replace(/\s{2,}/g, ' ')     // Replace multiple spaces with a single space
      .replace(/;\s+/g, ';\n')     // Add new lines after semicolons
      .replace(/}\s+/g, '}\n\n');  // Add new lines after closing braces
    
    return formattedCSS;
  } catch (error) {
    console.error('Error fetching CSS:', error);
    return '';
  }
};
