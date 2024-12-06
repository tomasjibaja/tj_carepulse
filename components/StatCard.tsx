import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface StatCardProps {
  type: 'appointments' | 'pending' | 'cancelled'
  count: number
  label: string
  icon: string
}

const StatCard = ({ count = 0, label, icon, type }: StatCardProps ) => {
  return (
    <div className={clsx('stat-card', {
      'bg-appointments': type === 'appointments',
      'bg-pending': type === 'pending',
      'bg-cancelled': type === 'cancelled'
    })}>
      <div className='flex items-center gap-4'>
        <Image
          src={icon}
          height={32}
          width={32}
          alt={label}
          className='size-8 w-fit'
        />
        <h1 className='text-32-bold text-white'>{count}</h1>
      </div>

      <p className='text-14-regular'>{type === 'appointments' ? 'agendado' : type === 'pending' ? 'pendiente' : 'cancelado'}{count != 1 && 's'}</p>
    </div>
  )
}

export default StatCard
