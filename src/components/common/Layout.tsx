import Navbar from "@/components/common/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">{children}</main>
    </>
  );
}
