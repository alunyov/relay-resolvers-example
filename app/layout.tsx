import "styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Todo App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
