import { Android, Apple } from "@/icons";

const mobileNav = () => {
  return (
    <nav>
      <button>
        <Apple />
        iOS
      </button>
      <button>
        <Android />
        Android
      </button>
    </nav>
  );
};

export default mobileNav;
