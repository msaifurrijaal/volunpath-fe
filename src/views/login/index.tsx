'use client';
import React, { useState } from 'react';

import Image from 'next/image';

import { useRouter } from 'next/navigation';

import Link from 'next/link';

import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Grid, TextField, Typography } from '@mui/material';

import { signIn } from 'next-auth/react';

import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

import styles from './Login.module.scss';

import Logo from '../../assets/images/logo/logo_rectangle.png';

const Login = ({
  searchParams,
}: {
  searchParams: { callbackUrl?: string };
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);

  const callbackUrl = searchParams?.callbackUrl || '/';
  const { replace } = useRouter();

  const authSchema = z.object({
    email: z.string().min(1, 'Email harus diisi').email('Email tidak valid'),
    password: z
      .string()
      .min(1, 'Kata sandi harus diisi')
      .min(8, 'Kata sandi minimal 8 karakter'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(authSchema),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = async (data: FieldValues) => {
    const { email, password } = data;

    setIsLoading(true);
    setError('');

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl,
    });

    if (res?.error) {
      setIsLoading(false);
      setError(res.error);
    } else {
      setError('');
      replace(callbackUrl);
    }
  };

  return (
    <main id="login">
      <Grid container className={styles.containerWrapper}>
        <Grid item xs={12} md={6} className={styles.columnA}>
          <div className={styles.columnA__banner}>
            <div className={styles.columnA__banner__content}>
              <Typography className={styles.columnA__banner__content__caption}>
                The purpose of human life is to serve, and to show compassion
                and the will to help others.
              </Typography>
              <Typography className={styles.columnA__banner__content__author}>
                Albert Schweitzer
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={styles.columnB}>
          <div className={styles.columnB__content}>
            <Image src={Logo} alt="Logo Volunpath" />
            <Typography className={styles.columnB__content__title}>
              Masuk
            </Typography>
            <Typography className={styles.columnB__content__description}>
              Selamat datang kembali! Silahkan masukkan email dan kata sandi
              anda
            </Typography>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.columnB__content__input}
            >
              <Grid container spacing={2} mt={2}>
                <Grid item xs={12}>
                  <TextField
                    {...register('email')}
                    fullWidth
                    label="Email"
                    type="email"
                  />
                  {errors.email && (
                    <Typography
                      color={'error'}
                      className={styles.columnB__content__input__error}
                    >
                      * {`${errors.email.message}`}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register('password')}
                    fullWidth
                    label="Kata Sandi"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: showPassword ? (
                        <IoMdEye
                          onClick={() => handleClickShowPassword()}
                          size={24}
                          cursor={'pointer'}
                        />
                      ) : (
                        <IoMdEyeOff
                          onClick={() => handleClickShowPassword()}
                          size={24}
                          cursor={'pointer'}
                        />
                      ),
                    }}
                  />
                  {errors.password && (
                    <Typography
                      color={'error'}
                      className={styles.columnB__content__input__error}
                    >
                      * {`${errors.password.message}`}
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <Typography className={styles.columnB__content__input__forgot}>
                Lupa Password
              </Typography>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Masuk'}
              </Button>
              {error && (
                <Typography
                  className={styles.columnB__content__input__errorLogin}
                  color={'error'}
                >
                  * {error}
                </Typography>
              )}
              <Typography className={styles.columnB__content__input__register}>
                Belum memiliki akun? <Link href={'/register'}>Daftar</Link>
              </Typography>
            </form>
          </div>
        </Grid>
      </Grid>
    </main>
  );
};

export default Login;
