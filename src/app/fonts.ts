import { Inter, JetBrains_Mono, Roboto_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  inter,
  roboto_mono,
  jetbrains_mono,
};

export default fonts;
