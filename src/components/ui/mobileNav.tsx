import { Android, Apple } from "@/icons";

const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 flex w-full md:hidden font-open z-10">
      <a
        href={"/store"}
        className="py-5 text-[1rem] gap-2 font-bold w-full bg-primary flex items-center justify-center text-primary border-r border-slate-900"
      >
        <Apple className="text-2xl" />
        iOS App
      </a>
      <a
        href={"store"}
        className="py-5 text-[1rem] gap-2 font-bold w-full bg-primary flex items-center justify-center text-primary border-l border-slate-900"
      >
        <Android className="text-2xl" />
        Android
      </a>
    </nav>
  );
};

export default MobileNav;
