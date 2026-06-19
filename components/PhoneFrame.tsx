import clsx from 'clsx'
import Image from 'next/image'

import frame from '@/images/iphone.svg'

export function PhoneFrame({
  className,
  children,
  priority = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { priority?: boolean }) {
  return (
    <div className={clsx('relative aspect-[448/916]', className)} {...props}>
      <Image
        src={frame}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full"
        unoptimized
        priority={priority}
      />
      <div className="absolute top-[calc(21/916*100%)] left-[calc(24/448*100%)] grid h-[calc(874/916*100%)] w-[calc(402/448*100%)] grid-cols-1 overflow-hidden rounded-[calc(58/448*100%)/calc(58/916*100%)] bg-gray-900">
        {children}
      </div>
    </div>
  )
}
