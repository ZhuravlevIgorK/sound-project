"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { usePathname } from "next/navigation";
import { PATH } from "@/app/config";

export default function Navbar() {
  const pathname = usePathname();
  const getLinkParams = (href) => {
    const params = {
      className:
        pathname === href
          ? [styles.button, styles.active].join(" ")
          : styles.button,
      href,
    };
    return params;
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.navigationHref}>
        <Link {...getLinkParams(PATH.HOME)}>О нас</Link>
        <Link {...getLinkParams(PATH.VIDEO_STUDIO)}>Видео студии</Link>
        <Link {...getLinkParams(PATH.SOUND_STUDIO)}>Студии звукозаписи</Link>
        <Link {...getLinkParams(PATH.ASSEMBLY_HALL)}>Актовые залы</Link>
        <Link {...getLinkParams(PATH.CONTACTS)}>Контакты</Link>
      </div>
    </nav>
  );
}
