import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CarePulse",
  description: "Carepulse is a healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications.",
  generator: 'Next.js',
  authors: [
    {
      name: 'mohamed ali hosni',
    }
  ],
  applicationName: 'CarePulse',
  keywords: [ "Health", "Healthcare", "Healthcare analytics", "Healthcare CRM", "Medical data integration", 
    "Healthcare business intelligence", "Healthcare automation software", "Healthcare workflow optimization", 
    "Integrated healthcare solutions", "Health tech solutions", "Medical software development", 
    "Healthcare data security", "Patient data privacy", "Healthcare data encryption", "GDPR-compliant healthcare system",
    "Healthcare information security", "Medical record confidentiality", "Healthcare workflow automation", 
    "Medical administration software", "Hospital management tools", "Healthcare billing solutions", 
    "Healthcare reporting tools", "Medical staff management", "Healthcare compliance software", 
    "Healthcare notification system", "Patient communication system", "Healthcare reminders", 
    "Automated appointment notifications", "SMS appointment reminders", "Healthcare alerts", 
    "Doctor-patient communication tools", "Doctor appointment scheduling", "Online appointment booking",
    "Healthcare appointment management", "Doctor appointment software", "Medical scheduling software", 
    "Appointment reminders", "Appointment confirmation", "Cancel medical appointments", "Appointment rescheduling", 
    "Online healthcare booking", "Patient management system", "Patient registration system", "Patient scheduling software",
    "Patient record management", "Patient appointment booking", "Medical appointment system", "Patient portal", 
    "Patient engagement tools", "Patient care coordination", "Patient check-in software", "Healthcare management system", 
    "Medical practice management", "Healthcare software", "Electronic health records (EHR)", "Health information management", 
    "Hospital management software", "Clinical management system", "Medical billing software", "Healthcare technology", 
    "Healthcare IT solutions", "Healthcare data management", "Telemedicine platform", "Remote patient monitoring", 
    "Health management software", "Electronic medical records (EMR)",
  ],
  openGraph: {
    title: 'CarePulse',
    description: "Carepulse is a healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications.",
    images: [
      {
        url: '/icons/logo.svg',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: 'mohamedalihosni',
    title: 'CarePulse',
    description: "Carepulse is a healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications.",
    images: [
      {
        url: '/icons/logo.svg',
      }
    ]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
