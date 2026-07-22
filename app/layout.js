import { Instrument_Sans, Instrument_Serif, Space_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

// Grotesque for headings and body copy.
const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Editorial serif, used sparingly for italic accent words.
const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

// Mono for labels, dates, and numbers.
const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Zohair Khan — Data Engineering",
  description:
    "Zohair Khan is an Industrial Engineering student at Texas A&M who builds data systems end to end: pipelines over millions of records, the models that score them, and the dashboards people actually use.",
  openGraph: {
    title: "Zohair Khan — Data Engineering",
    description:
      "Data systems end to end: 1.27M Medicare claims scored for fraud, churn models for a million subscribers, semantic search over 4,200 documents.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${spaceMono.variable} h-full`}
    >
      <body className="relative min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
