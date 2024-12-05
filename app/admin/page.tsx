import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import StatCard from '@/components/StatCard'
import { getRecentAppointmentList } from '@/lib/actions/appointment.actions'
import { DataTable } from '@/components/DataTable'
import { columns } from '@/components/table/columns'

const Admin = async () => {

  const appointments = await getRecentAppointmentList()

  return (
    <div className='mx-auto flex max-w-7xl flex-col space-y-14'>
      <header className='admin-header'>
        <Link href='/' className='cursor-pointer flex flex-row items-center'>
          <Image
            src='/assets/icons/logo-small.png'
            height={32}
            width={162}
            alt='Logo'
            className='h-8 w-fit'
          />
          <span className='font-bold text-lg px-2'>INK-TADÉ</span>
        </Link>

        <p className='text-16-semibold'>Panel de administrador</p>
      </header>

      <main className='admin-main'>
        <section className='w-full space-y-4'>
          <h1 className='header'>Turnos</h1>
          <p className='text-dark-700'>Estos son los turnos del día</p>
        </section>

        <section className='admin-stat'>
          <StatCard
            type='appointments'
            count={appointments.scheduledCount}
            label='Scheduled appointments'
            icon='/assets/icons/appointments.svg'
          />
          <StatCard
            type='pending'
            count={appointments.pendingCount}
            label='Pending appointments'
            icon='/assets/icons/pending.svg'
          />
          <StatCard
            type='cancelled'
            count={appointments.cancelledCount}
            label='Cancelled appointments'
            icon='/assets/icons/cancelled.svg'
          />
        </section>

        <DataTable
          columns={columns}
          data={appointments.documents}
        />

      </main>
    </div>
  )
}

export default Admin
