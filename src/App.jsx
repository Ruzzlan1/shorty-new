import React from 'react'
import './App.css'
import {QueryClientProvider, QueryClient} from 'react-query'
import Form from './components/Form'
import Footer from './components/Footer'
const queryClient = new QueryClient()

function App() {
  return (
    <>
      <div className="grid h-full place-items-center container mt-20 grid-rows-5 gap-5">
        <h1 className="font-bold text-4xl">Shorty</h1>
        <QueryClientProvider client={queryClient}>
          <Form />
        </QueryClientProvider>
        <Footer />
      </div>
    </>
  )
}

export default App
