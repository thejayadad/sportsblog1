import CardList from '@/components/client/CardList/CardList'
import CardMenu from '@/components/client/CardMenu/CardMenu'
import CategoryList from '@/components/client/CategoryList/CategoryList'
import Hero from '@/components/client/Hero/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryList />
      <CardList />
    </main>
  )
}
