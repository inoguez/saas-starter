'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CircleIcon, Loader, Loader2 } from 'lucide-react';
import { signIn, signUp } from './actions';
import { ActionState } from '@/lib/auth/middleware';
import RealitaLogo from '@/components/core/realita-logo';

export function Login({ mode = 'signin' }: { mode?: 'signin' | 'signup' }) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const priceId = searchParams.get('priceId');
  const inviteId = searchParams.get('inviteId');

  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === 'signin' ? signIn : signUp,
    { error: '' }
  );

  return (
    <div className='min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 '>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='flex justify-center'>
          <RealitaLogo />
        </div>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          {mode === 'signin' ? 'Inicia sesión en tu cuenta' : 'Crea una cuenta'}
        </h2>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <form className='space-y-6' action={formAction}>
          <input type='hidden' name='redirect' value={redirect || ''} />
          <input type='hidden' name='priceId' value={priceId || ''} />
          <input type='hidden' name='inviteId' value={inviteId || ''} />
          <div>
            <Label
              htmlFor='email'
              className='block text-sm font-medium text-off-white/70'
            >
              Correo
            </Label>
            <div className='mt-1'>
              <Input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                defaultValue={state.email}
                required
                maxLength={50}
                placeholder='Ingresa tu correo'
              />
            </div>
          </div>

          <div>
            <Label
              htmlFor='password'
              className='block text-sm font-medium text-off-white/70'
            >
              Contraseña
            </Label>
            <div className='mt-1'>
              <Input
                id='password'
                name='password'
                type='password'
                autoComplete={
                  mode === 'signin' ? 'current-password' : 'new-password'
                }
                defaultValue={state.password}
                required
                minLength={8}
                maxLength={100}
                placeholder='Ingresa tu contraseña'
              />
            </div>
          </div>

          {state?.error && (
            <div className='text-red-500 text-sm'>{state.error}</div>
          )}

          <div>
            <Button type='submit' className='w-full ' disabled={pending}>
              {pending ? (
                <>
                  <Loader className='animate-spin mr-2 h-4 w-4' />
                  Cargando...
                </>
              ) : mode === 'signin' ? (
                'Iniciar sesión'
              ) : (
                'Registrarse'
              )}
            </Button>
          </div>
        </form>

        <div className=' mt-6'>
          <div className='flex items-center gap-2 '>
            <div className='flex-1  flex items-center'>
              <div className=' w-full border-t border-off-white/30' />
            </div>
            <div className='flex-1  flex justify-center text-sm'>
              <span className='px-2  text-off-white/50'>
                {mode === 'signin' ? 'Nuevo en realita?' : 'Ya eres miembro?'}
              </span>
            </div>
            <div className=' flex-1  flex items-center'>
              <div className=' w-full border-t border-off-white/30' />
            </div>
          </div>

          <div className='mt-6'>
            <Link
              href={`${mode === 'signin' ? '/sign-up' : '/sign-in'}${
                redirect ? `?redirect=${redirect}` : ''
              }${priceId ? `&priceId=${priceId}` : ''}`}
              className='w-full flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-jet-black bg-off-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jade'
            >
              {mode === 'signin'
                ? 'Crear una cuenta'
                : 'Inicia sesión en tu cuenta'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
