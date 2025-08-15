// import { GoogleGenerativeAI } from '@google/generative-ai';

// // Initialize with the key from the .env file
// const genAI = new GoogleGenerativeAI("");

// export async function sendMessageToGemini(message) {
//     try {

//         const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

//         const result = await model.generateContent(message);
//         const response = await result.response;
//         const text = response.text();
//         return text;
//     } catch (error) {
//         // This will now log more specific errors from the Gemini API
//         console.error('Error in sendMessageToGemini:', error);
//         throw error;
//     }
// }