import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('./editor'), { ssr: false });

function Home() {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  );
}

export default Home;
