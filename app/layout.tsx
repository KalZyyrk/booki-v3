import { Raleway } from 'next/font/google' // Import de la font Google Raleway 

import './globals.css' // Import du CSS
import Header from './components/header/Header';

export const metadata = {
  title: 'Booki',
  description: 'Touvez votre hébergement pour des vacances de rêve',
}

// Appel de la font dans une variable
const font = Raleway({
  subsets: ['latin'], // Le type de caractere voulu
});
// Fonction Principale
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={font.className}> {/*pour utilier la font dans tout le body */}
        <Header />
        {children}
      </body>
    </html>
  )
}
