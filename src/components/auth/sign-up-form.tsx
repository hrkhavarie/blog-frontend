'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Controller, useForm } from 'react-hook-form';
import { z as zod } from 'zod';

import { paths } from '@/paths';
import { authClient } from '@/lib/auth/client';
import { useFormState } from 'react-dom';
import { error } from 'console';
import signUp from '@/api/sign-up.action';
// import { useUser } from '@/hooks/use-user';

// const schema = zod.object({
//   firstName: zod.string().min(1, { message: 'First name is required' }),
//   lastName: zod.string().min(1, { message: 'Last name is required' }),
//   email: zod.string().min(1, { message: 'Email is required' }).email(),
//   password: zod.string().min(6, { message: 'Password should be at least 6 characters' }),
//   terms: zod.boolean().refine((value) => value, 'You must accept the terms and conditions'),
// });

// type Values = zod.infer<typeof schema>;

// const defaultValues = { firstName: '', lastName: '', email: '', password: '', terms: false } satisfies Values;

export function SignUpForm(): React.JSX.Element {
  // const router = useRouter();

  // const { checkSession } = useUser();

  // const [isPending, setIsPending] = React.useState<boolean>(false);

  // const {
  //   control,
  //   handleSubmit,
  //   setError,
  //   formState: { errors },
  // } = useForm<Values>({ defaultValues, resolver: zodResolver(schema) });

  // const onSubmit = React.useCallback(
  //   async (values: Values): Promise<void> => {
  //     setIsPending(true);

  //     const { error } = await authClient.signUp(values);

  //     if (error) {
  //       setError('root', { type: 'server', message: error });
  //       setIsPending(false);
  //       return;
  //     }

  //     // Refresh the auth state
  //     await checkSession?.();

  //     // UserProvider, for this case, will not refresh the router
  //     // After refresh, GuestGuard will handle the redirect
  //     router.refresh();
  //   },
  //   [checkSession, router, setError]
  // );
const [state , formAction] = useFormState(signUp , {error : ""})
  return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <Typography variant="h4">Sign up</Typography>
        <Typography color="text.secondary" variant="body2">
          Already have an account?{' '}
          <Link component={RouterLink} href={paths.auth.signIn} underline="hover" variant="subtitle2">
            Sign in
          </Link>
        </Typography>
      </Stack>
      <form action={formAction}>
        <Stack spacing={2}>
          
                <InputLabel>First name</InputLabel>
                <OutlinedInput  
                  type='text'
                  name='firstName'
                  label="First name" />
                {/* // {errors.firstName ? <FormHelperText>{errors.firstName.message}</FormHelperText> : null} */}

                <InputLabel>Last name</InputLabel>
                <OutlinedInput
                  label="Last name"
                  type='text'
                  name='lastName'
                  />
                {/* {errors.firstName ? <FormHelperText>{errors.firstName.message}</FormHelperText> : null} */}
         
              
                <InputLabel>Email address</InputLabel>
                <OutlinedInput  
                  label="Email address" 
                  type="email"
                  name='email'
                  />
                {/* {errors.email ? <FormHelperText>{errors.email.message}</FormHelperText> : null} */}
            
                <InputLabel>Password</InputLabel>
                <OutlinedInput  
                  label="Password" 
                  type="password"
                  name='password'
                  />

          {/* {errors.root ? <Alert color="error">{errors.root.message}</Alert> : null} */}
          <Button  type="submit" variant="contained">
            Sign up
          </Button>
        </Stack>
      </form>
      <Alert color="warning">Created users are not persisted</Alert>
    </Stack>
  );
}
