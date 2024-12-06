import { Button } from '@/components/ui/button';
import { Doctors } from '@/constants';
import { getAppointment } from '@/lib/actions/appointment.actions';
import { formatDateTime } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function SuccessPage ( { params, searchParams }: SearchParamProps ) {

  const { userId } = await params;
  const appointmentId = (searchParams?.appointmentId as string) || ''; 
  const appointment = await getAppointment(appointmentId);
  
  const doctor = Doctors.find((doc) => doc.name === appointment.primaryPhysician)

  return (
    <div className='flex h-screen max-h-screen px-[5%]'>
      <div className='success-img'>
        <Link href='/'>
          <Image
            src='/assets/icons/logo-gold.png'
            height={1000}
            width={1000}
            alt='logo'
            className='h-40 w-fit'
          />
        </Link>

        <section className='flex flex-col items-center'>
          {/* <Image 
            src='/assets/gifs/success.gif'
            height={300}
            width={280}
            alt='success'
          /> */}
          <h2 className='header mb-6 max-w-[600px] text-center'>
            Tu <span className='text-beige-500'>solicitud</span> ha sido enviada exitosamente!
          </h2>
          <p>Nos comunicaremosen breve para confirmar</p>
        </section>

        <section className='request-details'>
          <p>Detalles del turno solicitado:</p>
          <div className='flex items-center gap-3'>
            <Image
              src={doctor?.image!}
              alt='doctor'
              width={300}
              height={300}
              className='size-12'
            />
            <p className='whitespace-nowrap'>Dr. {doctor?.name}</p>
          </div>
          <div className='flex gap-2'>
            <Image
              src='/assets/icons/calendar.svg'
              height={24}
              width={24}
              alt='calendar'
            />
            <p>{formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>

        <Button
          variant='outline'
          className='shad-primary-btn rounded'
        >
          <Link href={`/patients/${userId}/new-appointment`}>
            Nuevo turno
          </Link>
        </Button>
        <p className='copyright'>&copy; 2024 Ink-Tadé</p>
      </div>
    </div>
  )
}