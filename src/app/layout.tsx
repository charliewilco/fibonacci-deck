import "../style.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />

      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
