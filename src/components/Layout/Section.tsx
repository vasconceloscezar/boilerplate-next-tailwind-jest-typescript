export const Section = (props: any) => {
  return (
    <section {...props} className={`relative flex flex-col items-center min-h-[600px] ${props.className}`}>
      {props.children}
    </section>
  );
};
