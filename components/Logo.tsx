import Image from 'next/image'

function Logo() {
  return (
    <Image
      src='/_static/logo-1.png'
      alt='Nerds Kickboxing Club'
      width={300}
      height={200}
      priority
      className='rounded-full'
    />
  )
}

export default Logo
