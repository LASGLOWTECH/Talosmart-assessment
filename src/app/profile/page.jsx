import Chat from '../components/chat'
import Image from 'next/image'


export default function userPage() {
  return (
  <>


  
  
    <main className="min-h-screen p-24     bg-gradient-to-b from-darkBlue to-darkestBlue">
<h1 className='text-white text-6xl text-center font-bold'>USER PAGe</h1>
      <p className='text-lightGreen text-center text-base font-light'>welcome
</p>

<Chat/>
    </main>
    </>
  )
}
