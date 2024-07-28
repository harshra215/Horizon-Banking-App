import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = {firstName:'Harsh',lastName:'Ranjan',email:'contact@harsh.dev'};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                 type='greeting'
                 title='welcome'
                 user={loggedIn?.firstName || 'Guest'}
                 subtext = 'Access and manage your account and transcations efficiently.'
                />

                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
                />
            </header>

            RECENT TRANSACTIONS
        </div>

        <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50},{currentBalance:500.50}]}
         />
    </section>
  )
}

export default Home
