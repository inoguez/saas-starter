'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { FieldApi, useForm } from '@tanstack/react-form';
import { zodValidator } from '@tanstack/zod-form-adapter';
import React from 'react';
import { z } from 'zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em className='text-r-red text-xs'>
          {field.state.meta.errors.join(', ')}
        </em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  );
}
// Definir el esquema de validación utilizando Zod
const contactSchema = z.object({
  fullName: z.string().min(3, 'Nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Formato de correo invalido'),
  company: z.string().min(3, 'Empresa debe tener al menos 3 caracteres'),
  message: z.string().min(3, 'Mensaje debe tener al menos 3 caracteres'),
});
type Contact = z.infer<typeof contactSchema>;
export default function ContactForm() {
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      company: '',
      message: '',
    } as Contact,
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
    validatorAdapter: zodValidator(),
    validators: {
      onChange: contactSchema,
    },
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl font-bold text-off-white'>
          Envíanos un mensaje
        </CardTitle>
        <CardDescription className='text-off-white/40'>
          Completa el formulario y te responderemos en breve.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          action=''
          className=' flex flex-col gap-4'
        >
          <form.Field
            name='fullName'
            children={(field) => (
              <div className=' flex flex-col gap-1'>
                <div className='flex gap-2 items-center'>
                  <Label htmlFor={field.name}>Nombre</Label>
                  <FieldInfo field={field} />
                </div>
                <Input
                  className={cn({
                    '!border-r-red':
                      field.state.meta.isTouched &&
                      field.state.meta.errors.length,
                  })}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.currentTarget.value)}
                />
              </div>
            )}
          />
          <form.Field
            name='email'
            children={(field) => (
              <div className=' flex flex-col gap-1'>
                <div className='flex gap-2 items-center'>
                  <Label htmlFor={field.name}>Correo electrónico</Label>
                  <FieldInfo field={field} />
                </div>
                <Input
                  className={cn({
                    '!border-r-red':
                      field.state.meta.isTouched &&
                      field.state.meta.errors.length,
                  })}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.currentTarget.value)}
                />
              </div>
            )}
          />

          <form.Field
            name='company'
            children={(field) => (
              <div className=' flex flex-col gap-1'>
                <div className='flex gap-2 items-center'>
                  <Label htmlFor={field.name}>Empresa</Label>
                  <FieldInfo field={field} />
                </div>
                <Input
                  className={cn({
                    '!border-r-red':
                      field.state.meta.isTouched &&
                      field.state.meta.errors.length,
                  })}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.currentTarget.value)}
                />
              </div>
            )}
          />

          <form.Field
            name='message'
            children={(field) => (
              <div className=' flex flex-col gap-1'>
                <div className='flex gap-2 items-center'>
                  <Label htmlFor={field.name}>Mensaje</Label>
                  <FieldInfo field={field} />
                </div>
                <Textarea
                  className={cn({
                    '!border-r-red':
                      field.state.meta.isTouched &&
                      field.state.meta.errors.length,
                  })}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.currentTarget.value)}
                />
              </div>
            )}
          />

          {/* <form.Field
        name='asdas'
        children={(field) => (
          <>
            <Label htmlFor={field.name}>Empresa</Label>
            <Select
              name={field.name}
              value={field.state.value}
              onValueChange={(e) => field.handleChange(e)}
            >
              <SelectTrigger id={field.name} className='w-[180px]'>
                <SelectValue placeholder='Select a fruit' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectSeparator />
                  <SelectItem value='apple'>Apple</SelectItem>
                  <SelectItem value='banana'>Banana</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FieldInfo field={field} />
          </>
        )}
      /> */}

          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button type='submit' disabled={!canSubmit}>
                {isSubmitting ? '...' : 'Enviar'}
              </Button>
            )}
          />
        </form>
      </CardContent>
    </Card>
  );
}
