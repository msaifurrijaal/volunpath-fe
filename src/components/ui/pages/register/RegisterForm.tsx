import React from 'react';

import Image from 'next/image';

import Link from 'next/link';

import type { UseFormHandleSubmit } from 'react-hook-form';
import {
  Controller,
  type Control,
  type FieldErrors,
  type FieldValues,
  type UseFormRegister,
  type UseFormWatch,
} from 'react-hook-form';

import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';

import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

import Logo from '@/assets/images/logo/logo_rectangle.png';

import styles from './RegisterForm.module.scss';
import type { ErrorDataRoleMessage } from '@/types/errorTypes';

type RegisterFormProps = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
  watch: UseFormWatch<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  showPassword: boolean;
  showConfirmPassword: boolean;
  handleClickShowPassword: () => void;
  handleClickShowConfirmPassword: () => void;
  onSubmit: (data: FieldValues) => Promise<void>;
  isLoading: boolean;
  error: string;
  errorDataRole: ErrorDataRoleMessage;
};

const RegisterForm = ({
  register,
  errors,
  control,
  watch,
  handleSubmit,
  showPassword,
  showConfirmPassword,
  handleClickShowPassword,
  handleClickShowConfirmPassword,
  onSubmit,
  isLoading,
  error,
  errorDataRole,
}: RegisterFormProps) => {
  return (
    <main id="login">
      <Grid container className={styles.containerWrapper}>
        <Grid item xs={12} md={4} className={styles.columnA}>
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
        <Grid item xs={12} md={8} className={styles.columnB}>
          <div className={styles.columnB__content}>
            <Image src={Logo} alt="Logo Volunpath" />
            <Typography className={styles.columnB__content__title}>
              Daftar
            </Typography>
            <Typography className={styles.columnB__content__description}>
              Daftarkan akunmu sekarang juga
            </Typography>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.columnB__content__input}
            >
              <Grid container spacing={2} mt={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register('username')}
                    fullWidth
                    label="Username"
                    type="text"
                  />
                  {errors.username && (
                    <Typography
                      color={'error'}
                      className={styles.columnB__content__input__error}
                    >
                      * {`${errors.username.message}`}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
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
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register('fullname')}
                    fullWidth
                    label="Nama Lengkap"
                    type="text"
                  />
                  {errors.fullname && (
                    <Typography
                      color={'error'}
                      className={styles.columnB__content__input__error}
                    >
                      * {`${errors.fullname.message}`}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register('phone')}
                    fullWidth
                    label="No Telepon"
                    type="number"
                    InputProps={{
                      startAdornment: '+62',
                    }}
                  />
                  {errors.phone && (
                    <Typography
                      color={'error'}
                      className={styles.columnB__content__input__error}
                    >
                      * {`${errors.phone.message}`}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register('address')}
                    fullWidth
                    label="Alamat"
                    type="text"
                  />
                  {errors.address && (
                    <Typography
                      color={'error'}
                      className={styles.columnB__content__input__error}
                    >
                      * {`${errors.address.message}`}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register('city')}
                    fullWidth
                    label="Kota"
                    type="text"
                  />
                  {errors.city && (
                    <Typography
                      color={'error'}
                      className={styles.columnB__content__input__error}
                    >
                      * {`${errors.city.message}`}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
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
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register('confirmPassword')}
                    fullWidth
                    label="Konfirmasi Kata Sandi"
                    type={showConfirmPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: showConfirmPassword ? (
                        <IoMdEye
                          onClick={() => handleClickShowConfirmPassword()}
                          size={24}
                          cursor={'pointer'}
                        />
                      ) : (
                        <IoMdEyeOff
                          onClick={() => handleClickShowConfirmPassword()}
                          size={24}
                          cursor={'pointer'}
                        />
                      ),
                    }}
                  />
                  {errors.confirmPassword && (
                    <Typography
                      color={'error'}
                      className={styles.columnB__content__input__error}
                    >
                      * {`${errors.confirmPassword.message}`}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <FormLabel
                      id="demo-radio-buttons-group-label"
                      style={{ color: 'black' }}
                    >
                      Role Pengguna
                    </FormLabel>
                    <Controller
                      name="role"
                      control={control}
                      rules={{ required: true }}
                      defaultValue={''}
                      render={({ field }) => (
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          {...field}
                          name="role"
                          row
                        >
                          <FormControlLabel
                            value="volunteer"
                            control={<Radio />}
                            label="Volunteer / Relawan"
                          />
                          <FormControlLabel
                            value="organization"
                            control={<Radio />}
                            label="Organisasi"
                          />
                        </RadioGroup>
                      )}
                    />
                  </FormControl>
                  {errors.role && (
                    <Typography
                      color={'error'}
                      className={styles.columnB__content__input__error}
                    >
                      * {`${errors.role.message}`}
                    </Typography>
                  )}
                </Grid>
                {watch('role') === 'organization' && (
                  <>
                    <Grid item xs={12} md={6}>
                      <TextField
                        {...register('organizationName')}
                        fullWidth
                        label="Nama Organisasi"
                        type="text"
                        disabled={watch('role') !== 'organization'}
                      />
                      {errorDataRole.organizationName &&
                        !watch('organizationName') && (
                          <Typography
                            color={'error'}
                            className={styles.columnB__content__input__error}
                          >
                            * {`${errorDataRole.organizationName}`}
                          </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        {...register('organizationAddress')}
                        fullWidth
                        label="Alamat Organisasi"
                        type="text"
                        disabled={watch('role') !== 'organization'}
                      />
                      {errorDataRole.organizationAddress &&
                        !watch('organizationAddress') && (
                          <Typography
                            color={'error'}
                            className={styles.columnB__content__input__error}
                          >
                            * {`${errorDataRole.organizationAddress}`}
                          </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        {...register('organizationFocus')}
                        fullWidth
                        label="Fokus Organisasi"
                        type="text"
                        select
                        defaultValue={''}
                      >
                        <MenuItem value={'Kesehatan'}>Kesehatan</MenuItem>
                        <MenuItem value={'Pendidikan'}>Pendidikan</MenuItem>
                        <MenuItem value={'Layanan Sosial'}>
                          Layanan Sosial
                        </MenuItem>
                        <MenuItem value={'Makanan Sehat'}>
                          Makanan Sehat
                        </MenuItem>
                      </TextField>
                      {errorDataRole.organizationFocus &&
                        !watch('organizationFocus') && (
                          <Typography
                            color={'error'}
                            className={styles.columnB__content__input__error}
                          >
                            * {`${errorDataRole.organizationFocus}`}
                          </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        {...register('organizationDescription')}
                        fullWidth
                        label="Deskripsi Organisasi"
                        type="text"
                        disabled={watch('role') !== 'organization'}
                      />
                      {errorDataRole.organizationDescription &&
                        !watch('organizationDescription') && (
                          <Typography
                            color={'error'}
                            className={styles.columnB__content__input__error}
                          >
                            * {`${errorDataRole.organizationDescription}`}
                          </Typography>
                        )}
                    </Grid>
                  </>
                )}
                {watch('role') === 'volunteer' && (
                  <>
                    <Grid item xs={12} md={6}>
                      <TextField
                        {...register('volunteerSkills')}
                        fullWidth
                        label="Skills"
                        type="text"
                      />
                      {errorDataRole.volunteerSkills &&
                        !watch('volunteerSkills') && (
                          <Typography
                            color={'error'}
                            className={styles.columnB__content__input__error}
                          >
                            * {`${errorDataRole.volunteerSkills}`}
                          </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        {...register('volunteerEducation')}
                        fullWidth
                        label="Pendidikan"
                        type="text"
                      />
                      {errorDataRole.volunteerEducation &&
                        !watch('volunteerEducation') && (
                          <Typography
                            color={'error'}
                            className={styles.columnB__content__input__error}
                          >
                            * {`${errorDataRole.volunteerEducation}`}
                          </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        {...register('volunteerOtherDetails')}
                        fullWidth
                        label="Detail Lainnya"
                        type="text"
                      />
                      {errorDataRole.volunteerOtherDetails &&
                        !watch('volunteerOtherDetails') && (
                          <Typography
                            color={'error'}
                            className={styles.columnB__content__input__error}
                          >
                            * {`${errorDataRole.volunteerOtherDetails}`}
                          </Typography>
                        )}
                    </Grid>
                  </>
                )}
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
                {isLoading ? 'Loading...' : 'Daftar'}
              </Button>
              {error && (
                <Typography
                  className={styles.columnB__content__input__errorRegister}
                  color={'error'}
                >
                  * {error}
                </Typography>
              )}
              <Typography className={styles.columnB__content__input__login}>
                Sudah memiliki akun? <Link href={'/login'}>Masuk</Link>
              </Typography>
            </form>
          </div>
        </Grid>
      </Grid>
    </main>
  );
};

export default RegisterForm;
