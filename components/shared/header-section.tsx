interface HeaderSectionProps {
  label?: string
  title: string
  subtitle?: string
}

export function HeaderSection({ label, title, subtitle }: HeaderSectionProps) {
  return (
    <div className='flex flex-col items-center text-center'>
      {label ? (
        <div className='mb-4 text-balance bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center text-[40px] font-bold'>
          {label}
        </div>
      ) : null}
      <h2 className='font-heading text-3xl md:text-4xl lg:text-[40px]'>
        {title}
      </h2>
      {subtitle ? (
        <p className='mt-6 text-balance text-lg text-muted-foreground'>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
