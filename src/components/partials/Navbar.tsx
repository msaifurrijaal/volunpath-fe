'use client';
import React, { useState } from 'react';

import Image from 'next/image';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

import { IoPersonCircleSharp } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { MdMenu } from 'react-icons/md';

import { Button, Typography } from '@mui/material';

import { signOut } from 'next-auth/react';

import styles from './Navbar.module.scss';

import logo from '../../assets/images/logo/logo_rectangle.png';
import { useDataUser } from '@/context/DataUser';
import DialogQuestion from '../ui/commond/dialog/DialogQuestion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const { userData, removeData } = useDataUser();
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleUserMenu = () => {
    setOpenUserMenu(!openUserMenu);
  };

  const handleLogout = async () => {
    try {
      await signOut({ redirect: true, callbackUrl: '/login' });
      removeData();
      setOpenUserMenu(false);
      setOpenDialog(false);
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <>
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
                href="/"
                className={`${styles.header__nav__list__item} ${pathname === '/' ? styles.header__nav__list__item__active : styles.header__nav__list__item__inactive}`}
              >
                Beranda
              </Link>
            </li>
            <li className="group">
              <Link
                href="/event"
                className={`${styles.header__nav__list__item} ${pathname === '/event' ? styles.header__nav__list__item__active : styles.header__nav__list__item__inactive}`}
              >
                Event
              </Link>
            </li>
            <li className="group">
              <Link
                href="/news"
                className={`${styles.header__nav__list__item} ${pathname === '/news' ? styles.header__nav__list__item__active : styles.header__nav__list__item__inactive}`}
              >
                Berita
              </Link>
            </li>
            <li className="group">
              <Link
                href="/about-us"
                className={`${styles.header__nav__list__item} ${pathname === '/about-us' ? styles.header__nav__list__item__active : styles.header__nav__list__item__inactive}`}
              >
                Tentang Kami
              </Link>
            </li>
            {!userData ? (
              <li className="group">
                <div
                  className={`${styles.header__nav__list__item} ${pathname === '/login' ? styles.header__nav__list__item__active : styles.header__nav__list__item__inactive}`}
                >
                  <Button
                    variant="outlined"
                    style={{ textTransform: 'none' }}
                    LinkComponent={Link}
                    href="/login"
                  >
                    Mulai
                  </Button>
                </div>
              </li>
            ) : (
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
                    <Link href="/profile">Profil</Link>
                  </li>
                  <li className={styles.header__nav__list__item__submenu__item}>
                    <Link href="/my-activity">Kegiatan Saya</Link>
                  </li>
                  <li className={styles.header__nav__list__item__submenu__item}>
                    <Typography
                      onClick={() => setOpenDialog(true)}
                      color={'error'}
                      style={{ cursor: 'pointer' }}
                    >
                      Logout
                    </Typography>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <DialogQuestion
        sizeMaxWidth="xs"
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        onSubmit={handleLogout}
        title="Logout"
        description="Apakah anda yakin ingin keluar?"
      />
    </>
  );
};

export default Navbar;
