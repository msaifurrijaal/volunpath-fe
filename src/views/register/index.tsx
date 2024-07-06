'use client';
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import type { OrganizationData, VolunteerData } from '@/types/userTypes';
import { registerUser } from '@/services/auth/registerUser';
import type { ErrorDataRoleMessage } from '@/types/errorTypes';
import RegisterForm from '@/components/ui/pages/register/RegisterForm';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const { replace } = useRouter();

  const [errorDataRole, setErrorDataRole] = useState<ErrorDataRoleMessage>({
    organizationName: '',
    organizationAddress: '',
    organizationFocus: '',
    organizationDescription: '',
    volunteerSkills: '',
    volunteerEducation: '',
    volunteerOtherDetails: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const registerSchema = z
    .object({
      username: z.string().min(1, 'Username harus diisi'),
      email: z.string().min(1, 'Email harus diisi').email('Email tidak valid'),
      fullname: z.string().min(1, 'Fullname harus diisi'),
      phone: z.string().min(1, 'Phone harus diisi'),
      address: z.string().min(1, 'Address harus diisi'),
      city: z.string().min(1, 'City harus diisi'),
      password: z.string().min(6, 'Password minimal 6 karakter'),
      confirmPassword: z
        .string()
        .min(6, 'Konfirmasi Password minimal 6 karakter'),
      role: z
        .string({
          required_error: 'Role harus dipilih',
          invalid_type_error: 'Role harus dipilih',
        })
        .min(1, 'Role harus dipilih'),
      organizationName: z.string().optional(),
      organizationAddress: z.string().optional(),
      organizationFocus: z.string().optional(),
      organizationDescription: z.string().optional(),
      volunteerSkills: z.string().optional(),
      volunteerEducation: z.string().optional(),
      volunteerOtherDetails: z.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Password dan Konfirmasi Password tidak sama',
      path: ['confirmPassword'],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<FieldValues>({
    resolver: zodResolver(registerSchema),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const onSubmit = async (data: FieldValues) => {
    const role = data.role;

    const errorDataRoleMessage: ErrorDataRoleMessage = {
      organizationName: '',
      organizationAddress: '',
      organizationFocus: '',
      organizationDescription: '',
      volunteerSkills: '',
      volunteerEducation: '',
      volunteerOtherDetails: '',
    };

    if (role === 'organization') {
      errorDataRoleMessage.organizationName = !data.organizationName
        ? 'Nama harus diisi'
        : '';

      errorDataRoleMessage.organizationAddress = !data.organizationAddress
        ? 'Alamat harus diisi'
        : '';

      errorDataRoleMessage.organizationFocus = !data.organizationFocus
        ? 'Fokus harus diisi'
        : '';

      errorDataRoleMessage.organizationDescription =
        !data.organizationDescription ? 'Deskripsi harus diisi' : '';
    } else if (role === 'volunteer') {
      errorDataRoleMessage.volunteerSkills = !data.volunteerSkills
        ? 'Keterampilan harus diisi'
        : '';

      errorDataRoleMessage.volunteerEducation = !data.volunteerEducation
        ? 'Pendidikan harus diisi'
        : '';

      errorDataRoleMessage.volunteerOtherDetails = !data.volunteerOtherDetails
        ? 'Lainnya harus diisi'
        : '';
    }

    setErrorDataRole(errorDataRoleMessage);

    const isVolunteerValid =
      role === 'volunteer' &&
      errorDataRoleMessage.volunteerSkills === '' &&
      errorDataRoleMessage.volunteerEducation === '' &&
      errorDataRoleMessage.volunteerOtherDetails === '';

    const isOrganizationValid =
      role === 'organization' &&
      errorDataRoleMessage.organizationName === '' &&
      errorDataRoleMessage.organizationAddress === '' &&
      errorDataRoleMessage.organizationFocus === '' &&
      errorDataRoleMessage.organizationDescription === '';

    if (isVolunteerValid || isOrganizationValid) {
      registerNewUser(data);
    }
  };

  const registerNewUser = async (data: FieldValues) => {
    setIsLoading(true);
    setError('');

    if (data.role === 'volunteer') {
      const volunteerData: VolunteerData = {
        username: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        fullname: data.fullname,
        phone: data.phone,
        address: data.address,
        city: data.city,
        role: data.role,
        volunteerDetail: {
          skills: data.volunteerSkills,
          education: data.volunteerEducation,
          other_details: data.volunteerOtherDetails,
        },
      };

      try {
        const res = await registerUser(volunteerData);

        if (res.status === 201) {
          setIsLoading(false);
          replace('/login');
        }
      } catch (error: any) {
        setIsLoading(false);

        if (error.response.status === 400) {
          setError('Email atau username telah digunakan');
        } else {
          setError(error.response?.data?.message || error.message);
        }
      }
    }

    if (data.role === 'organization') {
      const organizationData: OrganizationData = {
        username: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        fullname: data.fullname,
        phone: data.phone,
        address: data.address,
        city: data.city,
        role: data.role,
        organizationDetail: {
          name: data.organizationName,
          address: data.organizationAddress,
          focus: data.organizationFocus,
          description: data.organizationDescription,
        },
      };

      try {
        const res = await registerUser(organizationData);

        if (res.status === 201) {
          replace('/login');
        }
      } catch (error: any) {
        setIsLoading(false);

        if (error.response.status === 400) {
          setError('Email atau username telah digunakan');
        } else {
          setError(error.response?.data?.message || error.message);
        }
      }
    }
  };

  return (
    <RegisterForm
      control={control}
      errors={errors}
      onSubmit={onSubmit}
      errorDataRole={errorDataRole}
      isLoading={isLoading}
      handleClickShowPassword={handleClickShowPassword}
      handleClickShowConfirmPassword={handleClickShowConfirmPassword}
      showPassword={showPassword}
      showConfirmPassword={showConfirmPassword}
      watch={watch}
      error={error}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
};

export default Register;
