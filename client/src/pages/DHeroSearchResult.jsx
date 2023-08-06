import heros from '../data/heros';
import { Hero } from '../features/DHero/index';
import PageContainer from '../layouts/PageContainer';
import Title from '../layouts/Title';
import TopPanel from '../layouts/TopPanel';

export default function DHeroSearchResult() {
  return (
    <div className='min-h-screen'>
      <TopPanel />
      <PageContainer>
        <Title color='black' title='ডেলিভাই হিরো' />

        <div className='my-8 flex flex-col gap-4 w-fit max-w-full mx-auto'>
          {heros.map((hero) => (
            <Hero details={hero} key={hero.id} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
