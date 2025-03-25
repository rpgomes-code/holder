export interface TickerImage {
    imageURL?: string;
}

export interface TickerHistory {
    date?:     Date;
    open?:     number;
    high?:     number;
    low?:      number;
    close?:    number;
    volume?:   number;
    repaired?: boolean;
}

export interface TickerActions {
    date?:        Date;
    dividends?:   number;
    stockSplits?: number;
}

export interface TickerAnalystPriceTargets {
    current?: number;
    high?:    number;
    low?:     number;
    mean?:    number;
    median?:  number;
}

export interface TickerBalanceSheet { // Fix this Type
    index?:             string;
    the20240930000000?: number | null;
    the20230930000000?: number | null;
    the20220930000000?: number | null;
    the20210930000000?: number | null;
    the20200930000000?: number | null;
}

export interface TickerCalendar {
    dividendDate?:    Date;
    exDividendDate?:  Date;
    earningsDate?:    Date[];
    earningsHigh?:    number;
    earningsLow?:     number;
    earningsAverage?: number;
    revenueHigh?:     number;
    revenueLow?:      number;
    revenueAverage?:  number;
}

export interface TickerCapitalGains { // Fix this Type
}

export interface TickerCashFlow { // Fix this Type
    index?:             string;
    the20241231000000?: number | null;
    the20231231000000?: number | null;
    the20221231000000?: number | null;
    the20211231000000?: number | null;
    the20201231000000?: number | null;
}

export interface TickerDividends {
    date?:  Date;
    value?: number;
}

export interface TickerEarnings { // Fix this Type
}

export interface TickerEarningsDates {
    earningsDate?: Date;
    epsEstimate?:  number | null;
    reportedEPS?:  number | null;
    surprise?:     number | null;
}

export interface TickerEarningsEstimates {
    period?:           string;
    avg?:              number;
    low?:              number;
    high?:             number;
    yearAgoEps?:       number;
    numberOfAnalysts?: number;
    growth?:           number;
}

export interface TickerEarningsHistory {
    quarter?:         Date;
    epsActual?:       number;
    epsEstimate?:     number;
    epsDifference?:   number;
    surprisePercent?: number;
}

export interface TickerEPSRevisions {
    period?:         string;
    upLast7Days?:    number;
    upLast30Days?:   number;
    downLast30Days?: number;
    downLast7Days?:  number;
}

export interface TickerEPSTrend {
    period?:       string;
    current?:      number;
    the7DaysAgo?:  number;
    the30DaysAgo?: number;
    the60DaysAgo?: number;
    the90DaysAgo?: number;
}

export interface TickerFastInfo {
    currency?:                   string;
    dayHigh?:                    number;
    dayLow?:                     number;
    exchange?:                   string;
    fiftyDayAverage?:            number;
    lastPrice?:                  number;
    lastVolume?:                 number;
    marketCap?:                  number;
    open?:                       number;
    previousClose?:              number;
    quoteType?:                  string;
    regularMarketPreviousClose?: number;
    shares?:                     number;
    tenDayAverageVolume?:        number;
    threeMonthAverageVolume?:    number;
    timezone?:                   string;
    twoHundredDayAverage?:       number;
    yearChange?:                 number;
    yearHigh?:                   number;
    yearLow?:                    number;
}

export interface TickerFinancials { // Fix this Type
    index?:             string;
    the20240930000000?: number | null;
    the20230930000000?: number;
    the20220930000000?: number;
    the20210930000000?: number;
    the20200930000000?: number | null;
}

export interface TickerGrowthEstimates {
    period?:     string;
    stockTrend?: number | null;
    indexTrend?: number;
}

export interface TickerHistoryMetadata {
    currency?:             string;
    symbol?:               string;
    exchangeName?:         string;
    fullExchangeName?:     string;
    instrumentType?:       string;
    firstTradeDate?:       number;
    regularMarketTime?:    number;
    hasPrePostMarketData?: boolean;
    gmtoffset?:            number;
    timezone?:             string;
    exchangeTimezoneName?: string;
    regularMarketPrice?:   number;
    fiftyTwoWeekHigh?:     number;
    fiftyTwoWeekLow?:      number;
    regularMarketDayHigh?: number;
    regularMarketDayLow?:  number;
    regularMarketVolume?:  number;
    longName?:             string;
    shortName?:            string;
    chartPreviousClose?:   number;
    previousClose?:        number;
    scale?:                number;
    priceHint?:            number;
    currentTradingPeriod?: CurrentTradingPeriod;
    tradingPeriods?:       string;
    dataGranularity?:      string;
    range?:                string;
    validRanges?:          string[];
}

interface CurrentTradingPeriod {
    pre?:     Post;
    regular?: Post;
    post?:    Post;
}

interface Post {
    timezone?:  string;
    start?:     number;
    end?:       number;
    gmtoffset?: number;
}

export interface TickerIncomeStatement { // Fix this type
    index?:             string;
    the20240930000000?: number | null;
    the20230930000000?: number;
    the20220930000000?: number;
    the20210930000000?: number;
    the20200930000000?: number | null;
}

export interface TickerInfo {
    address1?:                          string;
    city?:                              string;
    state?:                             string;
    zip?:                               string;
    country?:                           string;
    phone?:                             string;
    website?:                           string;
    industry?:                          string;
    industryKey?:                       string;
    industryDisp?:                      string;
    sector?:                            string;
    sectorKey?:                         string;
    sectorDisp?:                        string;
    longBusinessSummary?:               string;
    fullTimeEmployees?:                 number;
    companyOfficers?:                   CompanyOfficer[];
    auditRisk?:                         number;
    boardRisk?:                         number;
    compensationRisk?:                  number;
    shareHolderRightsRisk?:             number;
    overallRisk?:                       number;
    governanceEpochDate?:               number;
    compensationAsOfEpochDate?:         number;
    irWebsite?:                         string;
    executiveTeam?:                     any[];
    maxAge?:                            number;
    priceHint?:                         number;
    previousClose?:                     number;
    open?:                              number;
    dayLow?:                            number;
    dayHigh?:                           number;
    regularMarketPreviousClose?:        number;
    regularMarketOpen?:                 number;
    regularMarketDayLow?:               number;
    regularMarketDayHigh?:              number;
    dividendRate?:                      number;
    dividendYield?:                     number;
    exDividendDate?:                    number;
    payoutRatio?:                       number;
    fiveYearAvgDividendYield?:          number;
    beta?:                              number;
    trailingPE?:                        number;
    forwardPE?:                         number;
    volume?:                            number;
    regularMarketVolume?:               number;
    averageVolume?:                     number;
    averageVolume10Days?:               number;
    averageDailyVolume10Day?:           number;
    bid?:                               number;
    ask?:                               number;
    bidSize?:                           number;
    askSize?:                           number;
    marketCap?:                         number;
    fiftyTwoWeekLow?:                   number;
    fiftyTwoWeekHigh?:                  number;
    priceToSalesTrailing12Months?:      number;
    fiftyDayAverage?:                   number;
    twoHundredDayAverage?:              number;
    trailingAnnualDividendRate?:        number;
    trailingAnnualDividendYield?:       number;
    currency?:                          string;
    tradeable?:                         boolean;
    enterpriseValue?:                   number;
    profitMargins?:                     number;
    floatShares?:                       number;
    sharesOutstanding?:                 number;
    sharesShort?:                       number;
    sharesShortPriorMonth?:             number;
    sharesShortPreviousMonthDate?:      number;
    dateShortInterest?:                 number;
    sharesPercentSharesOut?:            number;
    heldPercentInsiders?:               number;
    heldPercentInstitutions?:           number;
    shortRatio?:                        number;
    shortPercentOfFloat?:               number;
    impliedSharesOutstanding?:          number;
    bookValue?:                         number;
    priceToBook?:                       number;
    lastFiscalYearEnd?:                 number;
    nextFiscalYearEnd?:                 number;
    mostRecentQuarter?:                 number;
    earningsQuarterlyGrowth?:           number;
    netIncomeToCommon?:                 number;
    trailingEps?:                       number;
    forwardEps?:                        number;
    lastSplitFactor?:                   string;
    lastSplitDate?:                     number;
    enterpriseToRevenue?:               number;
    enterpriseToEbitda?:                number;
    the52WeekChange?:                   number;
    sandP52WeekChange?:                 number;
    lastDividendValue?:                 number;
    lastDividendDate?:                  number;
    quoteType?:                         string;
    currentPrice?:                      number;
    targetHighPrice?:                   number;
    targetLowPrice?:                    number;
    targetMeanPrice?:                   number;
    targetMedianPrice?:                 number;
    recommendationMean?:                number;
    recommendationKey?:                 string;
    numberOfAnalystOpinions?:           number;
    totalCash?:                         number;
    totalCashPerShare?:                 number;
    ebitda?:                            number;
    totalDebt?:                         number;
    quickRatio?:                        number;
    currentRatio?:                      number;
    totalRevenue?:                      number;
    debtToEquity?:                      number;
    revenuePerShare?:                   number;
    returnOnAssets?:                    number;
    returnOnEquity?:                    number;
    grossProfits?:                      number;
    freeCashflow?:                      number;
    operatingCashflow?:                 number;
    earningsGrowth?:                    number;
    revenueGrowth?:                     number;
    grossMargins?:                      number;
    ebitdaMargins?:                     number;
    operatingMargins?:                  number;
    financialCurrency?:                 string;
    symbol?:                            string;
    language?:                          string;
    region?:                            string;
    typeDisp?:                          string;
    quoteSourceName?:                   string;
    triggerable?:                       boolean;
    customPriceAlertConfidence?:        string;
    cryptoTradeable?:                   boolean;
    corporateActions?:                  any[];
    exchange?:                          string;
    marketState?:                       string;
    regularMarketChange?:               number;
    regularMarketDayRange?:             string;
    fullExchangeName?:                  string;
    averageDailyVolume3Month?:          number;
    fiftyTwoWeekLowChange?:             number;
    fiftyTwoWeekLowChangePercent?:      number;
    fiftyTwoWeekRange?:                 string;
    fiftyTwoWeekHighChange?:            number;
    fiftyTwoWeekHighChangePercent?:     number;
    fiftyTwoWeekChangePercent?:         number;
    dividendDate?:                      number;
    earningsTimestamp?:                 number;
    earningsTimestampStart?:            number;
    earningsTimestampEnd?:              number;
    earningsCallTimestampStart?:        number;
    earningsCallTimestampEnd?:          number;
    isEarningsDateEstimate?:            boolean;
    epsTrailingTwelveMonths?:           number;
    epsForward?:                        number;
    epsCurrentYear?:                    number;
    priceEpsCurrentYear?:               number;
    fiftyDayAverageChange?:             number;
    fiftyDayAverageChangePercent?:      number;
    twoHundredDayAverageChange?:        number;
    twoHundredDayAverageChangePercent?: number;
    sourceInterval?:                    number;
    exchangeDataDelayedBy?:             number;
    averageAnalystRating?:              string;
    hasPrePostMarketData?:              boolean;
    firstTradeDateMilliseconds?:        number;
    messageBoardID?:                    string;
    exchangeTimezoneName?:              string;
    exchangeTimezoneShortName?:         string;
    gmtOffSetMilliseconds?:             number;
    market?:                            string;
    esgPopulated?:                      boolean;
    regularMarketTime?:                 number;
    shortName?:                         string;
    longName?:                          string;
    regularMarketChangePercent?:        number;
    regularMarketPrice?:                number;
    displayName?:                       string;
    trailingPegRatio?:                  number;
}

interface CompanyOfficer {
    maxAge?:           number;
    name?:             string;
    age?:              number;
    title?:            string;
    yearBorn?:         number;
    fiscalYear?:       number;
    totalPay?:         number;
    exercisedValue?:   number;
    unexercisedValue?: number;
}

export interface TickerInsiderPurchases {
    index?:                  number;
    insiderPurchasesLast6M?: string;
    shares?:                 number;
    trans?:                  number | null;
}

export interface TickerInsiderRosterHolders {
    index?:                 number;
    name?:                  string;
    position?:              string;
    url?:                   string;
    mostRecentTransaction?: string;
    latestTransactionDate?: Date;
    sharesOwnedDirectly?:   number | null;
    positionDirectDate?:    Date | null;
    sharesOwnedIndirectly?: number | null;
    positionIndirectDate?:  number | null;
}

export interface TickerInsiderTransactions {
    index?:       number;
    shares?:      number;
    value?:       number | null;
    url?:         string;
    text?:        string;
    insider?:     string;
    position?:    string;
    transaction?: string;
    startDate?:   Date;
    ownership?:   string;
}

export interface TickerInstitutionalHolders {
    index?:        number;
    dateReported?: Date;
    holder?:       string;
    pctHeld?:      number;
    shares?:       number;
    value?:        number;
    pctChange?:    number;
}

export interface TickerMajorHolders {
    index?: string;
    value?: number;
}

export interface TickerMutualFundHolders {
    index?:        number;
    dateReported?: Date;
    holder?:       string;
    pctHeld?:      number;
    shares?:       number;
    value?:        number;
    pctChange?:    number;
}

export interface TickerNews {
    id?:      string;
    content?: TickerNewContent;
}

export interface TickerNewContent {
    id?:              string;
    contentType?:     string;
    title?:           string;
    description?:     string;
    summary?:         string;
    pubDate?:         Date;
    displayTime?:     string;
    isHosted?:        boolean;
    bypassModal?:     boolean;
    previewURL?:      null | string;
    thumbnail?:       Thumbnail | null;
    provider?:        PurpleProvider;
    canonicalURL?:    PurpleURL;
    clickThroughURL?: PurpleURL | null;
    metadata?:        Metadata;
    finance?:         Finance;
    storyline?:       Storyline | null;
}

export interface PurpleURL {
    url?:    string;
    site?:   string;
    region?: string;
    lang?:   string;
}

export interface Finance {
    premiumFinance?: PremiumFinance;
}

export interface PremiumFinance {
    isPremiumNews?:     boolean;
    isPremiumFreeNews?: boolean;
}

export interface Metadata {
    editorsPick?: boolean;
}

export interface PurpleProvider {
    displayName?: string;
    url?:         string;
}

export interface Storyline {
    storylineItems?: StorylineItem[];
}

export interface StorylineItem {
    content?: StorylineItemContent;
}

export interface StorylineItemContent {
    id?:                 string;
    contentType?:        string;
    isHosted?:           boolean;
    title?:              string;
    thumbnail?:          Thumbnail;
    provider?:           FluffyProvider;
    previewURL?:         null;
    providerContentURL?: string;
    canonicalURL?:       FluffyURL;
    clickThroughURL?:    FluffyURL;
}

export interface FluffyURL {
    url?: string;
}

export interface FluffyProvider {
    displayName?: string;
    sourceID?:    string;
}

export interface Thumbnail {
    originalURL?:    string;
    originalWidth?:  number;
    originalHeight?: number;
    caption?:        string;
    resolutions?:    Resolution[] | null;
}

export interface Resolution {
    url?:    string;
    width?:  number;
    height?: number;
    tag?:    string;
}

