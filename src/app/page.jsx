import CountdownTimer from "./components/CountdownTimer";
import Link from "next/link";
import Image from "next/image";
export default function Home() {

  // Set your target date (e.g., '2024-05-10T00:00:00Z' for May 10, 2024)
  const targetDate = '2024-08-10T00:00:00Z';

  return (
    <main className="min-h-screen p-16  flex items-center justify-center flex-col bg-gradient-to-r from-Armygreen to-darkBlue">
      <Link href="/#">  <Image className="pb-6 size-auto"
        src="/pgrid.svg"
        alt="procuregrids"
        width={200}
        height={150}></Image></Link>
      <section className=' flex flex-col items-center justify-center'>
      

        <h1 className='text-white text-3xl  md:text-7xl py-6 text-center  shadow-2xl px-3 shadow-Lemongreen font-extrabold'>We are coming soon</h1>
        <p className='text-gray-300 pt-2 text-center text-base md:max-w-2xl pb-6 '> Procure Grids is Africa&apos;s first construction cost control technology. We host a market place that connects construction material vendors/supplier to construction companies, real estate developers, government entities and independent private builders. 
Welcome to our wait-list.
We go live in 3 months.  </p>
       
        <CountdownTimer targetDate={targetDate} />
        <div className="submit flex  flex-col justify-start  pt-5">


          <div className="text-lg text-white flex place-self-start    hover:bg-white hover:text-Armygreen focus:outline-none rounded-md px-6 py-3 shadow-Armygreen  my-3 bg-Lemongreen">
            <Link href="https://chat.whatsapp.com/HsmSDaMWczZAer8iWtcS1x">Learn More</Link>

          </div>


        </div>


      </section>

    </main>

  )
}
