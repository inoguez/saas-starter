import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl font-bold text-off-white'>
          Información de contacto
        </CardTitle>
        <CardDescription className='text-off-white/40'>
          Encuentra más formas de ponerte en contacto con nosotros.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex items-center space-x-4'>
          <Mail className='h-6 w-6 text-emerald-400' />
          <span className='text-white'>soporte@correo.com</span>
        </div>
        <div className='flex items-center space-x-4'>
          <Phone className='h-6 w-6 text-emerald-400' />
          <span className='text-white'>+52 (55) 1234-5678</span>
        </div>
        <div className='flex items-center space-x-4'>
          <MapPin className='h-6 w-6 text-emerald-400' />
          <span className='text-white'>-</span>
        </div>
      </CardContent>
      {/* <CardFooter>
          <div className='w-full space-y-4'>
            <p className='text-zinc-400'>Síguenos en redes sociales:</p>
            <div className='flex justify-start space-x-4'>
              <Link
                href='#'
                className='text-zinc-400 hover:text-white transition-colors'
              >
                Facebook
              </Link>
              <Link
                href='#'
                className='text-zinc-400 hover:text-white transition-colors'
              >
                Twitter
              </Link>
              <Link
                href='#'
                className='text-zinc-400 hover:text-white transition-colors'
              >
                LinkedIn
              </Link>
              <Link
                href='#'
                className='text-zinc-400 hover:text-white transition-colors'
              >
                Instagram
              </Link>
            </div>
          </div>
        </CardFooter> */}
    </Card>
  );
}
