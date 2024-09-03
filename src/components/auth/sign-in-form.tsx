'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { paths } from '@/paths';
import { useFormState } from 'react-dom';
import signIn from '@/api/sign-in.action';


export function SignInForm() {
  
  const [state , formAction] = useFormState( signIn, {error: ""})

  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Typography variant="h4">Sign in</Typography>
        <Typography color="text.secondary" variant="body2">
          Don&apos;t have an account?{' '}
          <Link component={RouterLink} href={paths.auth.signUp} underline="hover" variant="subtitle2">
            Sign up
          </Link>
        </Typography>
      </Stack>
      <form 
      action={formAction}>
        <Stack spacing={2}>
                <InputLabel>Email address</InputLabel>
                <OutlinedInput  
                  label="Email address" 
                  type="email" 
                  name='email' />             
                <InputLabel>Password</InputLabel>
                <OutlinedInput                 
                  label="Password"
                  name='password'
                  type='password'
                />
          <div>
            <Link component={RouterLink} href={paths.auth.resetPassword} variant="subtitle2">
              Forgot password?
            </Link>
          </div>
          <Button 
            type="submit" 
            variant="contained">
            Sign in
          </Button>
        </Stack>
      </form>
      {/* <Alert color="warning">
        Use{' '}
        <Typography component="span" sx={{ fontWeight: 700 }} variant="inherit">
          sofia@devias.io
        </Typography>{' '}
        with password{' '}
        <Typography component="span" sx={{ fontWeight: 700 }} variant="inherit">
          Secret1
        </Typography>
      </Alert> */}
    </Stack>
  );
}
