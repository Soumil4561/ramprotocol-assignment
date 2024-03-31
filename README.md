# ramprotocol-assignment

## Setup Instructions
1. Open a terminal in the project folder and run `npm i`

2. In the same folder, create an empty file with the name `.env` for defining the environment variables.

3. There are 3 variables:
    a. PORT: define a port on which the application would run. Default is 3000.
    b. BOT_TOKEN: The telegram bot token. To generate one visit [Generating Telegram Bot Token](https://core.telegram.org/bots/features#botfather)
    c. GEMINI_API_KEY: The gemini api key used for generating the response. To generate one visit [Generate Gemini API Key](https://aistudio.google.com/app/apikey)

4. Start the server by running `node index.js` in the terminal opened in project folder.