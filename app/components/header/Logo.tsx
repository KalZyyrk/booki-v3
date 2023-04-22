import Image from 'next/image';

const Logo = () => {
  return (
    <Image src='/images/logo.svg' height='19' width='62' alt='logo' className='cursor-pointer object-scale-down' />
  );
}

export default Logo