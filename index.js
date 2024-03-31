require('dotenv').config(); // Load the environment variables
const express = require('express');
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai"); 

const TelegramBot = require('node-telegram-bot-api'); // Import the node-telegram-bot-api library

// Create a new instance of the GoogleGenerativeAI class
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); 

const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});    //creating new telegram bot

//the function would run on the gemini-pro model to generate a response for a prompt
async function run(prompt) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    try{
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text;
    } catch (error) {
        console.log(error);
        return "Sorry, I am not able to generate a response at this time.";
    }
  }

//on receiving a message from the user, the bot would generate a response
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    //get the message from the user
    const message = msg.text;
    console.log("User Prompt: ", message);
    const response = await run(message);
    console.log("System Response: ", response);

    const text = `You: ${message}\nSystem: ${response}`;
    bot.sendMessage(chatId, text);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});