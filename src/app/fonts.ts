import {Inter, JetBrains_Mono, Open_Sans, Poppins, Roboto_Mono} from "next/font/google";

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

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "500"
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  inter,
  roboto_mono,
  jetbrains_mono,
  poppins,
  open_sans,
};

export default fonts;
