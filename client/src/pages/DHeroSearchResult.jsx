import Hero from '../components/ui/Hero';
import Title from '../components/ui/Title';
import heros from '../data/heros';
import PageContainer from '../layouts/PageContainer';
import TopPanel from '../layouts/TopPanel';

export default function DHeroSearchResult() {
  return (
    <div className='min-h-screen'>
      <TopPanel />
      <PageContainer>
        <Title color='black' title='ডেলিভাই হিরো' />

        <div className='my-8 flex flex-col gap-8 w-fit mx-auto'>
          {heros.map((hero) => (
            <Hero details={hero} key={hero.id} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
