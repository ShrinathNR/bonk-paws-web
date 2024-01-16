'use client';

import Modal from '@/app/components/Modal';
import OrganizationCard from '@/app/components/OrganizationCard';
import { Organization } from '@/types';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import React, { useState } from 'react';
import WalletButton from './components/WalletButton';
import { useWallet } from '@solana/wallet-adapter-react';
import OrganizationList from './components/OrganizationList';

export default function Home() {
  const [modalOrganization, setModalOrganization] = React.useState<Organization | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(true);
  const { publicKey, connected } = useWallet();
  const { setVisible: setModalVisible } = useWalletModal()
  const openWalletModal = () => {
    setModalVisible(true)
  }
  const donated = 4303201250;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Modal organization={modalOrganization}  isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="relative items-center text-center isolate px-6 pt-0 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-0 lg:py-20">
          <div className="mx-auto ">
            <div className="shiba-1 mx-auto w-40 max-w-40">
              <img className="shiba-1-head" src="shiba-1-head.png" />
              <img src="shiba-1-body.png" />
            </div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 mt-10 text-sm leading-6 text-slate-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                BONK for Paws is matching all BONK donations to animal-related causes 100% <a href="#statistics" className="font-semibold text-red-500"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&darr;</span></a>
              </div>
            </div>
            <h1 id="top" className="text-4xl font-bold tracking-tighter text-yellow-950 sm:text-6xl mt-10">Lend a helping paw!</h1>
            <p className="my-6 text-lg leading-8 text-gray-600">
              We&apos;re partnering with <a href="https://thegivingblock.com" className="text-bold text-red-500" target="_blank">The Giving Block</a> to match BONK donations to dog-related charities <span className="text-bold text-red-500">100%</span>. We&apos;re also burning <span className="text-bold text-red-500">1%</span> of your donation amount from our treasury, making your generous donations go even further!</p>
            { publicKey ? <a className="bg-red-500 hover:bg-red-400 text-white font-semibold py-3 px-5 border border-red-600 hover:border-red-600 rounded-lg" href="#charities">Get started!</a>
: <WalletButton onClick={openWalletModal} /> }
          </div>
        </div>
      </div>
      <OrganizationList />

      <div className="relative items-center text-center isolate px-6 mt-20 pt-0 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-0 lg:py-20">
          <div className="shiba-2 mx-auto w-40 max-w-40">
            <img className="" src="shiba-2-body.png" />
            <div className="shiba-2-eye"></div>
            <div className="shiba-2-star-1"></div>
            <div className="shiba-2-star-2"></div>
            <div className="shiba-2-star-3"></div>
            <div className="shiba-2-star-4"></div>
            <div className="shiba-2-star-5"></div>
          </div>
          <h1 id="statistics" className="text-4xl font-bold tracking-tighter text-yellow-950 sm:text-6xl mt-10">Making a difference!</h1>
          <p className="my-6 text-xl leading-8 text-slate-600">
            Thanks to your generosity, we&apos;ve been able to donate <span className="text-red-500 font-bold">{donated.toLocaleString()}</span> to <span className="text-red-500 font-bold">24</span> charities and counting, all while burning <span className="text-red-500 font-bold">{(donated/100).toLocaleString()}</span> BONK to make our community even stronger!
          </p>

          <div className="justify-center grid grid-cols-1 lg:grid-cols-3 gap-4 text-center my-4 mt-8">
              <div className="flex flex-col items-center justify-center border border-yellow-900 bg-yellow-950 bg-opacity-5 border-opacity-10 rounded-lg p-2 px-3">
                <h2 className="text-2xl font-bold tracking-tight text-yellow-900 sm:text-2xl truncate w-full">{(donated).toLocaleString()}</h2>
                <p className="text-gray-700" >Donated</p>
              </div>
              <div className="flex flex-col items-center justify-center border border-yellow-900 bg-yellow-950 bg-opacity-5 border-opacity-10 rounded-lg p-2 px-3">
                <h2 className="text-2xl font-bold tracking-tight text-yellow-900 sm:text-2xl">{ (donated / 100).toLocaleString()}</h2>
                <p className="text-gray-700">Burnt</p>
              </div>
              <div className="flex flex-col items-center justify-center border border-yellow-900 bg-yellow-950 bg-opacity-5 border-opacity-10 rounded-lg p-2 px-3">
                <h2 className="text-lg font-bold tracking-tight text-yellow-900 sm:text-2xl">24</h2>
                <p className="text-gray-700">Charities</p>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}  
