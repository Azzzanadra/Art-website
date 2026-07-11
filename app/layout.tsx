import "./globals.css";
import Nav from "./nav";

export const metadata = {
  title: "My Art Site",
  description: "A place to show my art, comics, and animations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <div className="container">
            <Nav />
            {children}
        </div>
      </body>
    </html>
  );
}
