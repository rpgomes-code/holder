export interface TickerImage {
    imageURL?: string | null;
}

export interface TickerHistory {
    date?:     Date | null;
    open?:     number | null;
    high?:     number | null;
    low?:      number | null;
    close?:    number | null;
    volume?:   number | null;
    repaired?: boolean | null;
}

export interface TickerActions {
    date?:        Date | null;
    dividends?:   number | null;
    stockSplits?: number | null;
}

export interface TickerAnalystPriceTargets {
    current?: number | null;
    high?:    number | null;
    low?:     number | null;
    mean?:    number | null;
    median?:  number | null;
}

export interface TickerBalanceSheet { // Fix this Type
    index?:             string | null;
    the20240930000000?: number | null;
    the20230930000000?: number | null;
    the20220930000000?: number | null;
    the20210930000000?: number | null;
    the20200930000000?: number | null;
}

export interface TickerCalendar {
    dividendDate?:    Date | null;
    exDividendDate?:  Date | null;
    earningsDate?:    Date[] | null;
    earningsHigh?:    number | null;
    earningsLow?:     number | null;
    earningsAverage?: number | null;
    revenueHigh?:     number | null;
    revenueLow?:      number | null;
    revenueAverage?:  number | null;
}

export interface TickerCapitalGains { // Fix this Type
}

export interface TickerCashFlow { // Fix this Type
    index?:             string | null;
    the20241231000000?: number | null;
    the20231231000000?: number | null;
    the20221231000000?: number | null;
    the20211231000000?: number | null;
    the20201231000000?: number | null;
}

export interface TickerDividends {
    date?:  Date | null;
    value?: number | null;
}

export interface TickerEarnings { // Fix this Type
}

export interface TickerEarningsDates {
    earningsDate?: Date | null;
    epsEstimate?:  number | null;
    reportedEPS?:  number | null;
    surprise?:     number | null;
}

export interface TickerEarningsEstimates {
    period?:           string | null;
    avg?:              number | null;
    low?:              number | null;
    high?:             number | null;
    yearAgoEps?:       number | null;
    numberOfAnalysts?: number | null;
    growth?:           number | null;
}

export interface TickerEarningsHistory {
    quarter?:         Date | null;
    epsActual?:       number | null;
    epsEstimate?:     number | null;
    epsDifference?:   number | null;
    surprisePercent?: number | null;
}

export interface TickerEPSRevisions {
    period?:         string | null;
    upLast7Days?:    number | null;
    upLast30Days?:   number | null;
    downLast30Days?: number | null;
    downLast7Days?:  number | null;
}

export interface TickerEPSTrend {
    period?:       string | null;
    current?:      number | null;
    the7DaysAgo?:  number | null;
    the30DaysAgo?: number | null;
    the60DaysAgo?: number | null;
    the90DaysAgo?: number | null;
}

export interface TickerFastInfo {
    currency?:                   string | null;
    dayHigh?:                    number | null;
    dayLow?:                     number | null;
    exchange?:                   string | null;
    fiftyDayAverage?:            number | null;
    lastPrice?:                  number | null;
    lastVolume?:                 number | null;
    marketCap?:                  number | null;
    open?:                       number | null;
    previousClose?:              number | null;
    quoteType?:                  string | null;
    regularMarketPreviousClose?: number | null;
    shares?:                     number | null;
    tenDayAverageVolume?:        number | null;
    threeMonthAverageVolume?:    number | null;
    timezone?:                   string | null;
    twoHundredDayAverage?:       number | null;
    yearChange?:                 number | null;
    yearHigh?:                   number | null;
    yearLow?:                    number | null;
}

export interface TickerFinancials { // Fix this Type
    index?:             string | null;
    the20240930000000?: number | null;
    the20230930000000?: number | null;
    the20220930000000?: number | null;
    the20210930000000?: number | null;
    the20200930000000?: number | null;
}

export interface TickerGrowthEstimates {
    period?:     string | null;
    stockTrend?: number | null;
    indexTrend?: number | null;
}

export interface TickerHistoryMetadata {
    currency?:             string | null;
    symbol?:               string | null;
    exchangeName?:         string | null;
    fullExchangeName?:     string | null;
    instrumentType?:       string | null;
    firstTradeDate?:       number | null;
    regularMarketTime?:    number | null;
    hasPrePostMarketData?: boolean | null;
    gmtoffset?:            number | null;
    timezone?:             string | null;
    exchangeTimezoneName?: string | null;
    regularMarketPrice?:   number | null;
    fiftyTwoWeekHigh?:     number | null;
    fiftyTwoWeekLow?:      number | null;
    regularMarketDayHigh?: number | null;
    regularMarketDayLow?:  number | null;
    regularMarketVolume?:  number | null;
    longName?:             string | null;
    shortName?:            string | null;
    chartPreviousClose?:   number | null;
    previousClose?:        number | null;
    scale?:                number | null;
    priceHint?:            number | null;
    currentTradingPeriod?: CurrentTradingPeriod | null;
    tradingPeriods?:       string | null;
    dataGranularity?:      string | null;
    range?:                string | null;
    validRanges?:          string[] | null;
}

interface CurrentTradingPeriod {
    pre?:     Post | null;
    regular?: Post | null;
    post?:    Post | null;
}

interface Post {
    timezone?:  string | null;
    start?:     number | null;
    end?:       number | null;
    gmtoffset?: number | null;
}

export interface TickerIncomeStatement { // Fix this type
    index?:             string | null;
    the20240930000000?: number | null;
    the20230930000000?: number | null;
    the20220930000000?: number | null;
    the20210930000000?: number | null;
    the20200930000000?: number | null;
}

export interface TickerInfo {
    address1?:                          string | null;
    city?:                              string | null;
    state?:                             string | null;
    zip?:                               string | null;
    country?:                           string | null;
    phone?:                             string | null;
    website?:                           string | null;
    industry?:                          string | null;
    industryKey?:                       string | null;
    industryDisp?:                      string | null;
    sector?:                            string | null;
    sectorKey?:                         string | null;
    sectorDisp?:                        string | null;
    longBusinessSummary?:               string | null;
    fullTimeEmployees?:                 number | null;
    companyOfficers?:                   CompanyOfficer[] | null;
    auditRisk?:                         number | null;
    boardRisk?:                         number | null;
    compensationRisk?:                  number | null;
    shareHolderRightsRisk?:             number | null;
    overallRisk?:                       number | null;
    governanceEpochDate?:               number | null;
    compensationAsOfEpochDate?:         number | null;
    irWebsite?:                         string | null;
    executiveTeam?:                     any[] | null;
    maxAge?:                            number | null;
    priceHint?:                         number | null;
    previousClose?:                     number | null;
    open?:                              number | null;
    dayLow?:                            number | null;
    dayHigh?:                           number | null;
    regularMarketPreviousClose?:        number | null;
    regularMarketOpen?:                 number | null;
    regularMarketDayLow?:               number | null;
    regularMarketDayHigh?:              number | null;
    dividendRate?:                      number | null;
    dividendYield?:                     number | null;
    exDividendDate?:                    number | null;
    payoutRatio?:                       number | null;
    fiveYearAvgDividendYield?:          number | null;
    beta?:                              number | null;
    trailingPE?:                        number | null;
    forwardPE?:                         number | null;
    volume?:                            number | null;
    regularMarketVolume?:               number | null;
    averageVolume?:                     number | null;
    averageVolume10Days?:               number | null;
    averageDailyVolume10Day?:           number | null;
    bid?:                               number | null;
    ask?:                               number | null;
    bidSize?:                           number | null;
    askSize?:                           number | null;
    marketCap?:                         number | null;
    fiftyTwoWeekLow?:                   number | null;
    fiftyTwoWeekHigh?:                  number | null;
    priceToSalesTrailing12Months?:      number | null;
    fiftyDayAverage?:                   number | null;
    twoHundredDayAverage?:              number | null;
    trailingAnnualDividendRate?:        number | null;
    trailingAnnualDividendYield?:       number | null;
    currency?:                          string | null;
    tradeable?:                         boolean | null;
    enterpriseValue?:                   number | null;
    profitMargins?:                     number | null;
    floatShares?:                       number | null;
    sharesOutstanding?:                 number | null;
    sharesShort?:                       number | null;
    sharesShortPriorMonth?:             number | null;
    sharesShortPreviousMonthDate?:      number | null;
    dateShortInterest?:                 number | null;
    sharesPercentSharesOut?:            number | null;
    heldPercentInsiders?:               number | null;
    heldPercentInstitutions?:           number | null;
    shortRatio?:                        number | null;
    shortPercentOfFloat?:               number | null;
    impliedSharesOutstanding?:          number | null;
    bookValue?:                         number | null;
    priceToBook?:                       number | null;
    lastFiscalYearEnd?:                 number | null;
    nextFiscalYearEnd?:                 number | null;
    mostRecentQuarter?:                 number | null;
    earningsQuarterlyGrowth?:           number | null;
    netIncomeToCommon?:                 number | null;
    trailingEps?:                       number | null;
    forwardEps?:                        number | null;
    lastSplitFactor?:                   string | null;
    lastSplitDate?:                     number | null;
    enterpriseToRevenue?:               number | null;
    enterpriseToEbitda?:                number | null;
    the52WeekChange?:                   number | null;
    sandP52WeekChange?:                 number | null;
    lastDividendValue?:                 number | null;
    lastDividendDate?:                  number | null;
    quoteType?:                         string | null;
    currentPrice?:                      number | null;
    targetHighPrice?:                   number | null;
    targetLowPrice?:                    number | null;
    targetMeanPrice?:                   number | null;
    targetMedianPrice?:                 number | null;
    recommendationMean?:                number | null;
    recommendationKey?:                 string | null;
    numberOfAnalystOpinions?:           number | null;
    totalCash?:                         number | null;
    totalCashPerShare?:                 number | null;
    ebitda?:                            number | null;
    totalDebt?:                         number | null;
    quickRatio?:                        number | null;
    currentRatio?:                      number | null;
    totalRevenue?:                      number | null;
    debtToEquity?:                      number | null;
    revenuePerShare?:                   number | null;
    returnOnAssets?:                    number | null;
    returnOnEquity?:                    number | null;
    grossProfits?:                      number | null;
    freeCashflow?:                      number | null;
    operatingCashflow?:                 number | null;
    earningsGrowth?:                    number | null;
    revenueGrowth?:                     number | null;
    grossMargins?:                      number | null;
    ebitdaMargins?:                     number | null;
    operatingMargins?:                  number | null;
    financialCurrency?:                 string | null;
    symbol?:                            string | null;
    language?:                          string | null;
    region?:                            string | null;
    typeDisp?:                          string | null;
    quoteSourceName?:                   string | null;
    triggerable?:                       boolean | null;
    customPriceAlertConfidence?:        string | null;
    cryptoTradeable?:                   boolean | null;
    corporateActions?:                  any[] | null;
    exchange?:                          string | null;
    marketState?:                       string | null;
    regularMarketChange?:               number | null;
    regularMarketDayRange?:             string | null;
    fullExchangeName?:                  string | null;
    averageDailyVolume3Month?:          number | null;
    fiftyTwoWeekLowChange?:             number | null;
    fiftyTwoWeekLowChangePercent?:      number | null;
    fiftyTwoWeekRange?:                 string | null;
    fiftyTwoWeekHighChange?:            number | null;
    fiftyTwoWeekHighChangePercent?:     number | null;
    fiftyTwoWeekChangePercent?:         number | null;
    dividendDate?:                      number | null;
    earningsTimestamp?:                 number | null;
    earningsTimestampStart?:            number | null;
    earningsTimestampEnd?:              number | null;
    earningsCallTimestampStart?:        number | null;
    earningsCallTimestampEnd?:          number | null;
    isEarningsDateEstimate?:            boolean | null;
    epsTrailingTwelveMonths?:           number | null;
    epsForward?:                        number | null;
    epsCurrentYear?:                    number | null;
    priceEpsCurrentYear?:               number | null;
    fiftyDayAverageChange?:             number | null;
    fiftyDayAverageChangePercent?:      number | null;
    twoHundredDayAverageChange?:        number | null;
    twoHundredDayAverageChangePercent?: number | null;
    sourceInterval?:                    number | null;
    exchangeDataDelayedBy?:             number | null;
    averageAnalystRating?:              string | null;
    hasPrePostMarketData?:              boolean | null;
    firstTradeDateMilliseconds?:        number | null;
    messageBoardID?:                    string | null;
    exchangeTimezoneName?:              string | null;
    exchangeTimezoneShortName?:         string | null;
    gmtOffSetMilliseconds?:             number | null;
    market?:                            string | null;
    esgPopulated?:                      boolean | null;
    regularMarketTime?:                 number | null;
    shortName?:                         string | null;
    longName?:                          string | null;
    regularMarketChangePercent?:        number | null;
    regularMarketPrice?:                number | null;
    displayName?:                       string | null;
    trailingPegRatio?:                  number | null;
}

interface CompanyOfficer {
    maxAge?:           number | null;
    name?:             string | null;
    age?:              number | null;
    title?:            string | null;
    yearBorn?:         number | null;
    fiscalYear?:       number | null;
    totalPay?:         number | null;
    exercisedValue?:   number | null;
    unexercisedValue?: number | null;
}

export interface TickerInsiderPurchases {
    index?:                  number | null;
    insiderPurchasesLast6M?: string | null;
    shares?:                 number | null;
    trans?:                  number | null;
}

export interface TickerInsiderRosterHolders {
    index?:                 number | null;
    name?:                  string | null;
    position?:              string | null;
    url?:                   string | null;
    mostRecentTransaction?: string | null;
    latestTransactionDate?: Date | null;
    sharesOwnedDirectly?:   number | null;
    positionDirectDate?:    Date | null;
    sharesOwnedIndirectly?: number | null;
    positionIndirectDate?:  number | null;
}

export interface TickerInsiderTransactions {
    index?:       number | null;
    shares?:      number | null;
    value?:       number | null;
    url?:         string | null;
    text?:        string | null;
    insider?:     string | null;
    position?:    string | null;
    transaction?: string | null;
    startDate?:   Date | null;
    ownership?:   string | null;
}

export interface TickerInstitutionalHolders {
    index?:        number | null;
    dateReported?: Date | null;
    holder?:       string | null;
    pctHeld?:      number | null;
    shares?:       number | null;
    value?:        number | null;
    pctChange?:    number | null;
}

export interface TickerMajorHolders {
    index?: string | null;
    value?: number | null;
}

export interface TickerMutualFundHolders {
    index?:        number | null;
    dateReported?: Date | null;
    holder?:       string | null;
    pctHeld?:      number | null;
    shares?:       number | null;
    value?:        number | null;
    pctChange?:    number | null;
}

export interface TickerNews {
    id?:      string | null;
    content?: TickerNewContent | null;
}

export interface TickerNewContent {
    id?:              string | null;
    contentType?:     string | null;
    title?:           string | null;
    description?:     string | null;
    summary?:         string | null;
    pubDate?:         Date | null;
    displayTime?:     string | null;
    isHosted?:        boolean | null;
    bypassModal?:     boolean | null;
    previewURL?:      string | null;
    thumbnail?:       Thumbnail | null;
    provider?:        PurpleProvider | null;
    canonicalURL?:    PurpleURL | null;
    clickThroughURL?: PurpleURL | null;
    metadata?:        Metadata | null;
    finance?:         Finance | null;
    storyline?:       Storyline | null;
}

export interface PurpleURL {
    url?:    string | null;
    site?:   string | null;
    region?: string | null;
    lang?:   string | null;
}

export interface Finance {
    premiumFinance?: PremiumFinance | null;
}

export interface PremiumFinance {
    isPremiumNews?:     boolean | null;
    isPremiumFreeNews?: boolean | null;
}

export interface Metadata {
    editorsPick?: boolean | null;
}

export interface PurpleProvider {
    displayName?: string | null;
    url?:         string | null;
}

export interface Storyline {
    storylineItems?: StorylineItem[] | null;
}

export interface StorylineItem {
    content?: StorylineItemContent | null;
}

export interface StorylineItemContent {
    id?:                 string | null;
    contentType?:        string | null;
    isHosted?:           boolean | null;
    title?:              string | null;
    thumbnail?:          Thumbnail | null;
    provider?:           FluffyProvider | null;
    previewURL?:         null;
    providerContentURL?: string | null;
    canonicalURL?:       FluffyURL | null;
    clickThroughURL?:    FluffyURL | null;
}

export interface FluffyURL {
    url?: string | null;
}

export interface FluffyProvider {
    displayName?: string | null;
    sourceID?:    string | null;
}

export interface Thumbnail {
    originalURL?:    string | null;
    originalWidth?:  number | null;
    originalHeight?: number | null;
    caption?:        string | null;
    resolutions?:    Resolution[] | null;
}

export interface Resolution {
    url?:    string | null;
    width?:  number | null;
    height?: number | null;
    tag?:    string | null;
}

