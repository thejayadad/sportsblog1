import CardList from '@/components/client/CardList/CardList'
import CardMenu from '@/components/client/CardMenu/CardMenu'
import CategoryList from '@/components/client/CategoryList/CategoryList'
import Hero from '@/components/client/Hero/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryList />
      <div className='grid grid-cols-1 md:grid md:grid-cols-8 gap-4 max-w-screen-xl mx-auto'>
        <div className='md:col-span-6 bg-orange-300 sm:col-span-1'>
        <CardList />
        </div>
        <div className='md:col-span-2 bg-red-200 sm:col-span-1'>
        <CardMenu />
        </div>
      </div>
    </main>
  )
}
