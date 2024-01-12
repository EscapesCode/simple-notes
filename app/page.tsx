import Image from 'next/image'
import Card  from "./card";
export default function Home() {
  return (
    <main className="pt-5">
      <div className='text-center'>
        <p className='text-xl font-extrabold  uppercase'>Simple Notes Made With
        <br /> NEXT.JS </p>
      </div>
      <div className="container rounded-xl ">
        <Card></Card>
      </div>
    </main>
  )
}
