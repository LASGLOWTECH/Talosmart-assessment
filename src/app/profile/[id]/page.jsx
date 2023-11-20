
import Image from 'next/image'


export default function userProfile({params}) {
  return (
  <>
    <main className="min-h-screen p-24     bg-gradient-to-b from-darkBlue to-darkestBlue">
    <p className='text-lightGreen text-center text-lg font-normal'>welcome
</p>
<h1 className='text-white text-6xl text-center font-bold'>{params.id}</h1>
  
    </main>
    </>
  )
}
