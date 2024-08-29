import ServerPublic from "@/components/ServerPublic";

export default function NoAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServerPublic>{children}</ServerPublic>
    </>
  );
}
