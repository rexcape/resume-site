export const metadata = {
  title: 'Rxsume',
  description: 'Online resume for rexcape',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
