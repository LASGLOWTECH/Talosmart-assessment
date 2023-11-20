
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-24   flex items-center justify-center flex-col bg-gradient-to-r from-darkBlue to-darkestBlue">

      <section className=''>
      <h1 className='text-white text-3xl text-center font-extrabold'>TALOSMART ASSESSMENT</h1>
      <p className='text-lightGreen pt-2 text-center text-base font-light'>This a short next js  project for a user Sign in and Register  </p>    
  
  <div className="submit flex  flex-col justify-start ">
          
        
          <div  className="text-lg text-white flex place-self-start  focus:outline-none rounded-md px-16 py-2  my-3 bg-darkGreen">
<Link href="/register">Register</Link>

          </div>


        </div>


      </section>
      
      </main>
  
  )
}
