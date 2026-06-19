import clsx from 'clsx'
import Image from 'next/image'

import icon216 from '@/images/logos/icon216.png'

export function Logomark({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      aria-hidden="true"
      className={clsx('relative overflow-hidden rounded-[22%]', className)}
      {...props}
    >
      <Image src={icon216} alt="" className="h-full w-full object-cover" />
    </div>
  )
}

export function Logo({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      aria-hidden="true"
      className={clsx('inline-flex items-center gap-3', className)}
      {...props}
    >
      <Logomark className="aspect-square h-full flex-none" />
      <span className="text-xl font-bold text-gray-900 leading-none">
        Miney
      </span>
    </div>
  )
}
