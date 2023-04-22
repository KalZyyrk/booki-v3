interface ContainerProps {
  children: React.ReactNode;
  header?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, header }) => {
  return (
    <div className={`max-w-[1440px] mx-auto xl:px-[50px] md:px-[50px] ${header ? 'sm:px-5' : 'sm:px-0'} px-4`}>
      {children}
    </div>
  );
}

export default Container