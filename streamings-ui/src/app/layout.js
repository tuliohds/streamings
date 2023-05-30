import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Streaming Calculator',
  description: 'Helps you calculate how much you have spent on streaming',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
