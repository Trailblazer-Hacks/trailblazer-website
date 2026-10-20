import { Footer, Header } from './Shell';

export function SubPage({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main" className="subpage section-pad">
        <p className="micro">{kicker}</p>
        <h1>{title}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
}
