# Crypto Tracker App

This is a cryptocurrency tracker app that fetches live data for cryptocurrencies such as Bitcoin, Ethereum, and others. The app provides real-time price information, 24-hour price change statistics, and market cap details.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Contributing](#contributing)
5. [License](#license)
6. [Contact](#contact)

## Installation

### Prerequisites

- Node.js (LTS version recommended)
- MongoDB (or a MongoDB Atlas account for cloud database)

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
2 Navigate to the project directory:cd your-repository-name
3.Install dependencies:npm 
4 .MONGO_URI=your-mongo-uri
5. API_KEY=your_api_key
6 Run the application=npm start
Usage
Once the app is running, you can:

View real-time cryptocurrency prices for popular coins like Bitcoin, Ethereum, etc.
Check the 24-hour price change percentage and market capitalization.
The app also supports displaying the price history for the selected cryptocurrencies.
API Endpoints
GET /crypto/:crypto - Fetch the latest data (price, 24h change, market cap) for a cryptocurrency. Example: /crypto/bitcoin

GET /crypto/deviation/:crypto - Get the standard deviation of prices over the last 100 price entries for a cryptocurrency. Example: /crypto/standard-deviation/ethereum

Features
Real-Time Crypto Data: Fetches live data from the CoinGecko API.
Price History: Stores the last 100 price points for each cryptocurrency.
Market Analysis: Provides 24h price change percentage and market cap.
Standard Deviation: Calculate price volatility using standard deviation over the last 100 prices.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -am 'Add feature').
Push to the branch (git push origin feature-name).
Create a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions, feel free to reach out to:

Email:yadavbhuvesh715@gmail.com
GitHub: @Bhuveshyadav02
#   K o i n x - A s s i n g m e n t  
 