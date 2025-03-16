import { HeroHeader } from "@/components/navbar/hero5-header";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen  dark:[--color-muted:var(--color-zinc-900)]">
      <HeroHeader />
      <div className=" h-full flex justify-center items-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
