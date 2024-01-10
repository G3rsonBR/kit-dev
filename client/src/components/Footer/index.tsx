import DonateIcon from '@/assets/donation.svg'
import Image from 'next/image'

export function Footer() {
  
  return (
    <footer className="absolute bottom-0 left-0 w-full list-item text-center items-center sm:flex justify-between py-2 px-3 sm:py-7 sm:px-11">
      <div>
        <p className='text-sm text-white'>Gostou do site? Te ajudou quando precisou?</p>
        <p className='text-sm text-white'>Que tal ajudar a gente a aprimorar cada vez mais?</p>
      </div>
      <div className='flex justify-center p-2'>
        <a href="#" className='text-sm text-white pr-3 hover:underline hover:decoration-white'>Doe para o café dos Devs!</a>
        <Image  src={DonateIcon} alt="Icone de uma mão segurando uma moeda com um cifrão de dinheiro no meio, indicando doação" width={32} />
      </div>
    </footer>
  )
}