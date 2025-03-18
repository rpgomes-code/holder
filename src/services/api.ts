import axios from 'axios';

// Create an axios instance that points to yfinance wrapper API
const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptor for handling errors
apiClient.interceptors.response.use(
    response => response,
    error => {
        // Log errors for debugging
        console.error('API request error:', error);
        return Promise.reject(error);
    }
);

// API methods for stock data
export const stockService = {
    // Ticker information
    async getTickerInfo(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/info`);
        return response.data;
    },

    // Ticker Basic information
    async getTickerBasicInfo(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/fast-info`);
        return response.data;
    },

    // Ticker Image
    async getTickerImage(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/image`);
        return response.data;
    },

    async getTickerIsin(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/isin`);
        return response.data;
    },

    // Ticker historical data with optional parameters
    async getTickerHistory(
        ticker: string,
        params: {
            period?: string;
            interval?: string;
            start?: string;
            end?: string;
            prepost?: boolean;
            actions?: boolean;
        } = {}
    ) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/history`, { params });
        return response.data;
    },

    // Financial data endpoints
    async getTickerFinancials(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/financials`);
        return response.data;
    },

    async getTickerQuarterlyFinancials(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/quarterly-financials`);
        return response.data;
    },

    async getTickerFundsData(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/funds-data`);
        return response.data;
    },

    async getTickerInsiderPurchases(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/insider-purchases`);
        return response.data;
    },

    async getTickerInsiderRosterHolders(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/insider-roster-holders`);
        return response.data;
    },

    async getTickerInsiderTransactions(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/insider-transactions`);
        return response.data;
    },

    async getTickerInstitutionalHolders(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/institutional-holders`);
        return response.data;
    },

    async getTickerMajorHolders(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/major-holders`);
        return response.data;
    },

    async getTickerMutualFundHolders(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/mutualfund-holders`);
        return response.data;
    },

    async getTickerActions(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/actions`);
        return response.data;
    },

    async getTickerCalendar(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/calendar`);
        return response.data;
    },

    async getTickerCapitalGains(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/capital-gains`);
        return response.data;
    },

    async getTickerOptions(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/options`);
        return response.data;
    },

    async getTickerGrowthEstimates(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/growth-estimates`);
        return response.data;
    },

    async getTickerHistoryMetadata(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/history-metadata`);
        return response.data;
    },

    async getTickerBalanceSheet(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/balance-sheet`);
        return response.data;
    },

    async getTickerQuarterlyBalanceSheet(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/quarterly-balance-sheet`);
        return response.data;
    },

    async getTickerCashFlow(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/cash-flow`);
        return response.data;
    },

    async getTickerQuarterlyCashFlow(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/quarterly-cash-flow`);
        return response.data;
    },

    async getTickerIncomeStatement(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/income-stmt`);
        return response.data;
    },

    async getTickerQuarterlyIncomeStatement(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/quarterly-income-stmt`);
        return response.data;
    },

    // Earnings and Dividends
    async getTickerEarnings(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/earnings`);
        return response.data;
    },

    async getTickerQuarterlyEarnings(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/quarterly-earnings`);
        return response.data;
    },

    async getTickerEarningsDates(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/earnings-dates`);
        return response.data;
    },

    async getTickerEarningsEstimate(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/earnings-estimate`);
        return response.data;
    },

    async getTickerEarningsHistory(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/earnings-history`);
        return response.data;
    },

    async getTickerEPSRevisions(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/eps-revisions`);
        return response.data;
    },

    async getTickerEPSTrend(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/eps-trend`);
        return response.data;
    },

    async getTickerDividends(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/dividends`);
        return response.data;
    },

    // News
    async getTickerNews(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/news`);
        return response.data;
    },

    // Recommendations and Analysis
    async getTickerRecommendations(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/recommendations`);
        return response.data;
    },

    async getTickerRecommendationsSummary(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/recommendations-summary`);
        return response.data;
    },

    async getTickerRevenueEstimate(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/revenue-estimate`);
        return response.data;
    },

    async getTickerSECFilings(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/sec-filings`);
        return response.data;
    },

    async getTickerShares(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/shares`);
        return response.data;
    },

    async getTickerSplits(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/splits`);
        return response.data;
    },

    async getTickerSustainability(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/sustainability`);
        return response.data;
    },

    async getTickerUpgradesDowngrades(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/upgrades-downgrades`);
        return response.data;
    },

    async getTickerAnalystPriceTargets(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/analyst-price-targets`);
        return response.data;
    },

    // Search
    async searchQuotes(query: string) {
        const response = await apiClient.get(`/v1/search/${query}/quotes`);
        return response.data;
    },

    async searchAll(query: string) {
        const response = await apiClient.get(`/v1/search/${query}/all`);
        return response.data;
    },

    async searchLists(query: string) {
        const response = await apiClient.get(`/v1/search/${query}/lists`);
        return response.data;
    },

    async searchNews(query: string) {
        const response = await apiClient.get(`/v1/search/${query}/news`);
        return response.data;
    },

    async searchResearch(query: string) {
        const response = await apiClient.get(`/v1/search/${query}/research`);
        return response.data;
    },

    async searchResponse(query: string) {
        const response = await apiClient.get(`/v1/search/${query}/response`);
        return response.data;
    },

    // Market data
    async getMarketStatus(market: string = 'us') {
        const response = await apiClient.get(`/v1/market/${market}/status`);
        return response.data;
    },

    async getMarketSummary(market: string = 'us') {
        const response = await apiClient.get(`/v1/market/${market}/summary`);
        return response.data;
    },

    async getMarketMovers(market: string, direction: 'gainers' | 'losers') {
        const response = await apiClient.get(`/v1/market/${market}/movers/${direction}`);
        return response.data;
    },

    // Options data
    async getTickerOptionsChain(ticker: string, date?: string) {
        const params = date ? { date } : {};
        const response = await apiClient.get(`/v1/ticker/${ticker}/option-chain`, { params });
        return response.data;
    },

    // Multi-ticker data
    async getMultiTicker(tickers: string[]) {
        const symbols = tickers.join(',');
        const response = await apiClient.get(`/v1/multi-ticker?symbols=${symbols}`);
        return response.data;
    }
};

// Export default for convenience
export default apiClient;