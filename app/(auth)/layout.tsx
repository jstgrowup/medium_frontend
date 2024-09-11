export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="border-b p-1 text-center">
        20% off for the next few days
      </div>
      {children}
    </div>
  );
}
