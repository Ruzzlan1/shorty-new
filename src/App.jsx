import React from 'react'
import './App.css'
import {QueryClientProvider, QueryClient} from 'react-query'
import Form from './components/Form'
import Footer from './components/Footer'
const queryClient = new QueryClient()

function App() {
  return (
    <>
      <div className="grid h-screen place-items-center grid-rows-3 gap-5 bg-hero-pattern bg-scroll">
        <h1 className="font-bold lg:text-6xl text-4xl">Shorty</h1>
        <QueryClientProvider client={queryClient}>
          <Form />
        </QueryClientProvider>
        <Footer />
      </div>
    </>
  )
}

export default App
