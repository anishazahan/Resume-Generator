export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className="py-6 bg-black text-center text-white">Header</h2>
      <div className="min-h-[90vh]">{children}</div>
      <h2 className="py-6 bg-black text-center text-white">Footer</h2>
    </>
  );
}
