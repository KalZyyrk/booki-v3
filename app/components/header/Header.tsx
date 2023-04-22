import Container from '../Container';
import Logo from './Logo';

const Header = () => {
  return (
    <Container header>
      <div className='w-full bg-white'>
        <div className=''>
          <Logo />
        </div>
      </div>
    </Container>
  );
}

export default Header;