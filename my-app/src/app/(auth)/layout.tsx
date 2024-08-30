import ServerProtected from "@/components/ServerProtected";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServerProtected>{children}</ServerProtected>
    </>
  );
}
