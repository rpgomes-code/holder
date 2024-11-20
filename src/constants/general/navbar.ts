import { GeneralItem } from "@/types/general/navbar";
import {
  Clock,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Star,
  UsersRound,
  Wallet,
  Wand,
} from "lucide-react";

export const defaultUser = {
  name: "System",
  email: "system@rpgomes.com",
  avatar: "/system/system-user.jpg",
};

export const navHolderMain = [
  {
    title: "Portfolios",
    url: "/portfolios",
    icon: Wallet,
    isActive: false,
    items: [
      {
        title: "XTB - Dividend",
        url: "/portfolios/1",
      },
      {
        title: "XTB - Value/Growth",
        url: "/portfolios/2",
      },
      {
        title: "Trading 212 - ETFs",
        url: "/portfolios/3",
      },
    ],
  },
  {
    title: "Community",
    url: "/community",
    icon: UsersRound,
    items: [
      {
        title: "Feed",
        url: "/community/feed",
      },
      {
        title: "Groups",
        url: "/community/groups",
      },
      {
        title: "Friends",
        url: "/community/friends",
      },
      {
        title: "Portfolios",
        url: "/community/portfolios",
      },
      {
        title: "Leaderboard",
        url: "/community/leaderboard",
      },
    ],
  },
  {
    title: "Holder Tools",
    url: "/holder/tools",
    icon: Wand,
    items: [
      {
        title: "Laboratory",
        url: "/holder/tools/laboratory",
      },
      {
        title: "Trade Analyzer",
        url: "/holder/tools/trade-analyzer",
      },
      {
        title: "Dip Finder",
        url: "/holder/tools/dip-finder",
      },
      {
        title: "Calendar",
        url: "/holder/tools/calendar",
      },
      {
        title: "News Aggregator",
        url: "/holder/tools/news-aggregator",
      },
    ],
  },
];

export const navStonksMain = [
  {
    title: "Insights",
    url: "/stonks/insights",
    icon: Star,
    isActive: false,
    items: [
      {
        title: "Top Gainers",
        url: "/stonks/insights/top-gainers",
      },
      {
        title: "Top Losers",
        url: "/stonks/insights/top-losers",
      },
      {
        title: "Dividend Stocks",
        url: "/stonks/insights/dividend-stocks",
      },
      {
        title: "REITs",
        url: "/stonks/insights/reits",
      },
      {
        title: "ETFs",
        url: "/stonks/insights/etfs",
      },
      {
        title: "Indices",
        url: "/stonks/insights/indices",
      },
      {
        title: "Crypto",
        url: "/stonks/insights/crypto",
      },
    ],
  },
  {
    title: "Watchlists",
    url: "/stonks/watchlists",
    icon: Clock,
    items: [
      {
        title: "Growth Stocks",
        url: "/stonks/watchlists/1",
      },
      {
        title: "Dividend Stocks",
        url: "/stonks/watchlists/2",
      },
      {
        title: "ETFs",
        url: "/stonks/watchlists/3",
      },
    ],
  },
  {
    title: "Stonks Tools",
    url: "/stonks/tools",
    icon: Wand,
    items: [
      {
        title: "Screener",
        url: "/stonks/tools/stock-screener",
      },
      {
        title: "Heatmap",
        url: "/stonks/tools/heatmap",
      },
      {
        title: "Comparator",
        url: "/stonks/tools/comparator",
      },
      {
        title: "Calculators",
        url: "/stonks/tools/calculators",
      },
    ],
  },
];

export const navSecondary = [
  {
    title: "Support",
    url: "/support",
    icon: LifeBuoy,
  },
  {
    title: "Feedback",
    url: "/feedback",
    icon: Send,
  },
];

export const generalItems: GeneralItem[] = [
  {
    name: "Design Engineering",
    url: "#",
    icon: Frame,
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: PieChart,
  },
  {
    name: "Travel",
    url: "#",
    icon: Map,
  },
];
