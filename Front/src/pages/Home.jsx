import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Description from '../components/Description'

function Home() {
    return (
        <div>
            <Layout>
                <div className='bg-purple-400'>
                    <Hero />
                    <hr className="h-2 w-full bg-black" />
                    <Description />
                </div>

            </Layout>
        </div>
    )
}

export default Home