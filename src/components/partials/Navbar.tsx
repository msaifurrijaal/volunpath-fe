'use client';
import React, { useState } from 'react';

import Image from 'next/image';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

import { IoPersonCircleSharp } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { MdMenu } from 'react-icons/md';

import styles from './Navbar.module.scss';

import logo from '../../assets/images/logo/logo_rectangle.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleUserMenu = () => {
    setOpenUserMenu(!openUserMenu);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <div className={styles.header__nav__logo}>
          <Image src={logo} alt="Logo Volunpath" />
        </div>
        <div className={styles.header__nav__menu}>
          {menuOpen ? (
            <MdClose
              className={styles.header__nav__menu__icon}
              onClick={toggleMenu}
            />
          ) : (
            <MdMenu
              className={styles.header__nav__menu__icon}
              onClick={toggleMenu}
            />
          )}
        </div>
        <ul
          className={`${styles.header__nav__list} ${menuOpen ? styles.header__nav__list__open : styles.header__nav__list__close}`}
        >
          <li className="group">
            <Link
              href="/home"
              className={`${styles.header__nav__list__item} ${pathname === '/home' ? styles.header__nav__list__item__active : styles.header__nav__list__item__inactive}`}
            >
              Beranda
            </Link>
          </li>
          <li className="group">
            <Link
              href="/activity"
              className={`${styles.header__nav__list__item} ${pathname === '/activity' ? styles.header__nav__list__item__active : styles.header__nav__list__item__inactive}`}
            >
              Aktivitas
            </Link>
          </li>
          <li className="group">
            <Link
              href="/about"
              className={`${styles.header__nav__list__item} ${pathname === '/about' ? styles.header__nav__list__item__active : styles.header__nav__list__item__inactive}`}
            >
              Tentang Kami
            </Link>
          </li>
          <li className="group">
            <div
              className={`${styles.header__nav__list__item} ${styles.header__nav__list__item__user}`}
              onClick={toggleUserMenu}
            >
              <IoPersonCircleSharp size={28} />
            </div>
            <ul
              className={`${styles.header__nav__list__item__submenu} ${openUserMenu ? styles.header__nav__list__item__submenu__open : styles.header__nav__list__item__submenu__close}`}
            >
              <li className={styles.header__nav__list__item__submenu__item}>
                <Link href="/profile">Profile</Link>
              </li>
              <li className={styles.header__nav__list__item__submenu__item}>
                <Link href="/settings">Settings</Link>
              </li>
              <li className={styles.header__nav__list__item__submenu__item}>
                <Link href="/logout">Logout</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
