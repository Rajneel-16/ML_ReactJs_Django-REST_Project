import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Description from '../components/Description'

function Home() {
    return (
        <div>
            <Layout>
                <div className='bg-gray-900'>
                    <Hero />
                    <Description />
                </div>

            </Layout>
        </div>
    )
}

export default Home