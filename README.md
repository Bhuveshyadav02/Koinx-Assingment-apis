
# Crypto Tracker App

This is a cryptocurrency tracker app that fetches live data for cryptocurrencies such as Bitcoin, Ethereum, and others. The app provides real-time price information, 24-hour price change statistics, and market cap details.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [API Endpoints](#api-endpoints)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

## Installation

### Prerequisites

- **Node.js** (LTS version recommended)
- **MongoDB** (or a MongoDB Atlas account for cloud database)

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repository-name
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file and add the following variables:
   ```env
   MONGO_URI=your-mongo-uri
   API_KEY=your_api_key
   ```

5. Run the application:
   ```bash
   npm start
   ```

## Usage

Once the app is running, you can:

- View real-time cryptocurrency prices for popular coins like Bitcoin, Ethereum, etc.
- Check the 24-hour price change percentage and market capitalization.
- The app also supports displaying the price history for the selected cryptocurrencies.

## API Endpoints

### `GET /crypto/:crypto`

Fetch the latest data (price, 24h change, market cap) for a cryptocurrency.

Example:
```bash
GET /crypto/bitcoin
https://koinx-assingment-apis-1.onrender.com/api/crypto/stats/bitcoin
```

### `GET /crypto/deviation/:crypto`

Get the standard deviation of prices over the last 100 price entries for a cryptocurrency.

Example:
```bash
GET https://koinx-assingment-apis-1.onrender.com/api/crypto/deviation/bitcoin
```

## Features

- **Real-Time Crypto Data**: Fetches live data from the CoinGecko API.
- **Price History**: Stores the last 100 price points for each cryptocurrency.
- **Market Analysis**: Provides 24h price change percentage and market cap.
- **Standard Deviation**: Calculates price volatility using standard deviation over the last 100 prices.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes.
4. Commit your changes:
   ```bash
   git commit -am 'Add feature'
   ```
5. Push to the branch:
   ```bash
   git push origin feature-name
   ```
6. Create a pull request.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions, feel free to reach out to:

- Email: [yadavbhuvesh715@gmail.com](mailto:yadavbhuvesh715@gmail.com)
- GitHub: [@Bhuveshyadav02](https://github.com/Bhuveshyadav02)
