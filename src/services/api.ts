import axios from 'axios';
import {
    TickerActions,
    TickerAnalystPriceTargets,
    TickerBalanceSheet,
    TickerCalendar,
    TickerCapitalGains,
    TickerCashFlow,
    TickerDividends,
    TickerEarnings,
    TickerEarningsDates,
    TickerEarningsEstimates,
    TickerEarningsHistory,
    TickerEPSRevisions, TickerEPSTrend,
    TickerFastInfo,
    TickerFinancials,
    TickerGrowthEstimates,
    TickerHistory,
    TickerHistoryMetadata,
    TickerImage,
    TickerIncomeStatement,
    TickerInfo,
    TickerInsiderPurchases,
    TickerInsiderRosterHolders,
    TickerInsiderTransactions,
    TickerInstitutionalHolders,
    TickerMajorHolders,
    TickerMutualFundHolders,
    TickerNews
} from "@/types/api/ticker";

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

// API methods related with Stock
export const stockService = {

    // Ticker Basic information
    async getTickerBasicInfo(ticker: string): Promise<TickerFastInfo | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/fast-info`);
        return response.data;
    },

    // Ticker Complete Information
    async getTickerInfo(ticker: string): Promise<TickerInfo | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/info`);
        return response.data;
    },

    // Ticker Image
    async getTickerImage(ticker: string): Promise<TickerImage | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/image`);
        return response.data;
    },

    // Ticker ISIN
    async getTickerIsin(ticker: string): Promise<string | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/isin`);
        return response.data;
    },

    // Ticker Funds Information
    async getTickerFundsData(ticker: string){
        const response = await apiClient.get(`/v1/ticker/${ticker}/funds-data`);
        return response.data;
    },

    // Ticker Insider Purchases
    async getTickerInsiderPurchases(ticker: string): Promise<TickerInsiderPurchases | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/insider-purchases`);
        return response.data;
    },

    // Ticker Insider Roster Holders
    async getTickerInsiderRosterHolders(ticker: string): Promise<TickerInsiderRosterHolders | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/insider-roster-holders`);
        return response.data;
    },

    // Ticker Insider Transactions
    async getTickerInsiderTransactions(ticker: string): Promise<TickerInsiderTransactions | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/insider-transactions`);
        return response.data;
    },

    // Ticker Institutional Holders
    async getTickerInstitutionalHolders(ticker: string): Promise<TickerInstitutionalHolders | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/institutional-holders`);
        return response.data;
    },

    // Ticker Major Holders
    async getTickerMajorHolders(ticker: string): Promise<TickerMajorHolders | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/major-holders`);
        return response.data;
    },

    // Ticker Mutual Fund Holders
    async getTickerMutualFundHolders(ticker: string): Promise<TickerMutualFundHolders | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/mutualfund-holders`);
        return response.data;
    },

    // Ticker Corporate Actions
    async getTickerActions(ticker: string): Promise<TickerActions | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/actions`);
        return response.data;
    },

    // Ticker Calendar
    async getTickerCalendar(ticker: string): Promise<TickerCalendar | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/calendar`);
        return response.data;
    },

    // Ticker Capital Gains
    async getTickerCapitalGains(ticker: string): Promise<TickerCapitalGains | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/capital-gains`);
        return response.data;
    },

    // Ticker Options
    async getTickerOptions(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/options`);
        return response.data;
    },

    // Ticker Options Chain
    async getTickerOptionsChain(ticker: string, date?: string) {
        const params = date ? { date } : {};
        const response = await apiClient.get(`/v1/ticker/${ticker}/option-chain`, { params });
        return response.data;
    },

    // Ticker Dividends
    async getTickerDividends(ticker: string): Promise<TickerDividends | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/dividends`);
        return response.data;
    },

    // Ticker News
    async getTickerNews(ticker: string): Promise<TickerNews | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/news`);
        return response.data;
    },

    // Ticker Shares
    async getTickerShares(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/shares`);
        return response.data;
    },

    // Ticker Splits
    async getTickerSplits(ticker: string){
        const response = await apiClient.get(`/v1/ticker/${ticker}/splits`);
        return response.data;
    },

    // Ticker Sustainability
    async getTickerSustainability(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/sustainability`);
        return response.data;
    },

    // Ticker Recommendations
    async getTickerRecommendations(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/recommendations`);
        return response.data;
    },

    // Ticker Recommendations Summary
    async getTickerRecommendationsSummary(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/recommendations-summary`);
        return response.data;
    },

    // Ticker Growth Estimates
    async getTickerGrowthEstimates(ticker: string): Promise<TickerGrowthEstimates | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/growth-estimates`);
        return response.data;
    },

    // Ticker Revenue Estimate
    async getTickerRevenueEstimate(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/revenue-estimate`);
        return response.data;
    },

    // Ticker SEC Filings
    async getTickerSECFilings(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/sec-filings`);
        return response.data;
    },

    async getTickerUpgradesDowngrades(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/upgrades-downgrades`);
        return response.data;
    },

    async getTickerAnalystPriceTargets(ticker: string): Promise<TickerAnalystPriceTargets | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/analyst-price-targets`);
        return response.data;
    },

    // Ticker History Metadata
    async getTickerHistoryMetadata(ticker: string): Promise<TickerHistoryMetadata | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/history-metadata`);
        return response.data;
    },

    // Ticker Historical data with optional parameters
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
    ): Promise<TickerHistory | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/history`, { params });
        return response.data;
    },

    // Ticker Financial data
    async getTickerFinancials(ticker: string): Promise<TickerFinancials | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/financials`);
        return response.data;
    },

    // Ticker Quarterly Financial data
    async getTickerQuarterlyFinancials(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/quarterly-financials`);
        return response.data;
    },

    // Ticker Balance Sheet
    async getTickerBalanceSheet(ticker: string): Promise<TickerBalanceSheet | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/balance-sheet`);
        return response.data;
    },

    // Ticker Quarterly Balance Sheet
    async getTickerQuarterlyBalanceSheet(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/quarterly-balance-sheet`);
        return response.data;
    },

    // Ticker Cash Flow
    async getTickerCashFlow(ticker: string): Promise<TickerCashFlow | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/cash-flow`);
        return response.data;
    },

    // Ticker Quarterly Cash Flow
    async getTickerQuarterlyCashFlow(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/quarterly-cash-flow`);
        return response.data;
    },

    // Ticker Income Statement
    async getTickerIncomeStatement(ticker: string): Promise<TickerIncomeStatement | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/income-stmt`);
        return response.data;
    },

    // Ticker Quarterly Income Statement
    async getTickerQuarterlyIncomeStatement(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/quarterly-income-stmt`);
        return response.data;
    },

    // Ticker Earnings
    async getTickerEarnings(ticker: string): Promise<TickerEarnings | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/earnings`);
        return response.data;
    },

    // Ticker Quarterly Earnings
    async getTickerQuarterlyEarnings(ticker: string) {
        const response = await apiClient.get(`/v1/ticker/${ticker}/quarterly-earnings`);
        return response.data;
    },

    // Ticker Earnings Dates
    async getTickerEarningsDates(ticker: string): Promise<TickerEarningsDates | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/earnings-dates`);
        return response.data;
    },

    // Ticker Earnings Estimates
    async getTickerEarningsEstimate(ticker: string): Promise<TickerEarningsEstimates | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/earnings-estimate`);
        return response.data;
    },

    // Ticker Earnings History
    async getTickerEarningsHistory(ticker: string): Promise<TickerEarningsHistory | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/earnings-history`);
        return response.data;
    },

    // Ticker Earnings Per Share Revisions
    async getTickerEPSRevisions(ticker: string): Promise<TickerEPSRevisions | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/eps-revisions`);
        return response.data;
    },

    // Ticker Earnings Per Share Trend
    async getTickerEPSTrend(ticker: string): Promise<TickerEPSTrend | null> {
        const response = await apiClient.get(`/v1/ticker/${ticker}/eps-trend`);
        return response.data;
    },

    // Multi-ticker data
    async getMultiTicker(tickers: string[]) {
        const symbols = tickers.join(',');
        const response = await apiClient.get(`/v1/multi-ticker?symbols=${symbols}`);
        return response.data;
    }
};

// API methods related with Search
export const searchService = {

    // Search Quotes
    async searchQuotes(query: string) {
        const response = await apiClient.get(`/v1/search/${query}/quotes`);
        return response.data;
    },

    // Search All / Everything (Quotes, News,...)
    async searchAll(query: string) {
        const response = await apiClient.get(`/v1/search/${query}/all`);
        return response.data;
    },

    // Search Lists
    async searchLists(query: string) {
        const response = await apiClient.get(`/v1/search/${query}/lists`);
        return response.data;
    },

    // Search News
    async searchNews(query: string) {
        const response = await apiClient.get(`/v1/search/${query}/news`);
        return response.data;
    },

    // Search Research
    async searchResearch(query: string) {
        const response = await apiClient.get(`/v1/search/${query}/research`);
        return response.data;
    },

    // Raw Search Response
    async searchResponse(query: string) {
        const response = await apiClient.get(`/v1/search/${query}/response`);
        return response.data;
    },
};

// API methods related with Market
export const marketService = {

    // Market Status
    async getMarketStatus(market: string = 'us') {
        const response = await apiClient.get(`/v1/market/${market}/status`);
        return response.data;
    },

    // Market Summary / Information
    async getMarketSummary(market: string = 'us') {
        const response = await apiClient.get(`/v1/market/${market}/summary`);
        return response.data;
    },
};

// API methods related with Sector
export const sectorService = {

    // Sector Industries
    async getSectorIndustries(sector: string) {
        const response = await apiClient.get(`/v1/sector/${sector}/industries`);
        return response.data;
    },

    // Sector Key
    async getSectorKey(sector: string) {
        const response = await apiClient.get(`/v1/sector/${sector}/key`);
        return response.data;
    },

    // Sector Name
    async getSectorName(sector: string) {
        const response = await apiClient.get(`/v1/sector/${sector}/name`);
        return response.data;
    },

    // Sector Overview
    async getSectorOverview(sector: string) {
        const response = await apiClient.get(`/v1/sector/${sector}/overview`);
        return response.data;
    },

    // Sector Research Reports
    async getSectorResearchReports(sector: string) {
        const response = await apiClient.get(`/v1/sector/${sector}/research-reports`);
        return response.data;
    },

    // Sector Symbol
    async getSectorSymbol(sector: string) {
        const response = await apiClient.get(`/v1/sector/${sector}/symbol`);
        return response.data;
    },

    // Sector Ticker
    async getSectorTicker(sector: string) {
        const response = await apiClient.get(`/v1/sector/${sector}/ticker`);
        return response.data;
    },

    // Sector Top Companies
    async getSectorTopCompanies(sector: string) {
        const response = await apiClient.get(`/v1/sector/${sector}/top-companies`);
        return response.data;
    },

    // Sector Top ETF's
    async getSectorTopETFs(sector: string) {
        const response = await apiClient.get(`/v1/sector/${sector}/top-etfs`);
        return response.data;
    },

    // Sector Top Mutual Funds
    async getSectorTopMutualFunds(sector: string) {
        const response = await apiClient.get(`/v1/sector/${sector}/top-mutual-funds`);
        return response.data;
    },
};

// API methods related with Industry
export const industryService = {

    // Industry Key
    async getIndustryKey(industry: string) {
        const response = await apiClient.get(`/v1/industry/${industry}/key`);
        return response.data;
    },

    // Industry Name
    async getIndustryName(industry: string) {
        const response = await apiClient.get(`/v1/industry/${industry}/name`);
        return response.data;
    },

    // Industry Overview
    async getIndustryOverview(industry: string) {
        const response = await apiClient.get(`/v1/industry/${industry}/overview`);
        return response.data;
    },

    // Industry Research Reports
    async getIndustryResearchReports(industry: string) {
        const response = await apiClient.get(`/v1/industry/${industry}/research-reports`);
        return response.data;
    },

    // Industry Sector Key
    async getIndustrySectorKey(industry: string) {
        const response = await apiClient.get(`/v1/industry/${industry}/sector-key`);
        return response.data;
    },

    // Industry Sector Name
    async getIndustrySectorName(industry: string) {
        const response = await apiClient.get(`/v1/industry/${industry}/sector-name`);
        return response.data;
    },

    // Industry Symbol
    async getIndustrySymbol(industry: string) {
        const response = await apiClient.get(`/v1/industry/${industry}/symbol`);
        return response.data;
    },

    // Industry Ticker
    async getIndustryTicker(industry: string) {
        const response = await apiClient.get(`/v1/industry/${industry}/ticker`);
        return response.data;
    },

    // Industry Top Companies
    async getIndustryTopCompanies(industry: string) {
        const response = await apiClient.get(`/v1/industry/${industry}/top-companies`);
        return response.data;
    },

    // Industry Top Growth Companies
    async getIndustryTopGrowthCompanies(industry: string) {
        const response = await apiClient.get(`/v1/industry/${industry}/top-growth-companies`);
        return response.data;
    },

    // Industry Top Performing Companies
    async getIndustryTopPerformingCompanies(industry: string) {
        const response = await apiClient.get(`/v1/industry/${industry}/top-performing-companies`);
        return response.data;
    },
};

// Export default for convenience
export default apiClient;