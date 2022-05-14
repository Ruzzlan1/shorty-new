import React from 'react'
import './App.css'
import {QueryClientProvider, QueryClient, QueryCache} from 'react-query'
import Form from './components/Form'
import Footer from './components/Footer'
import toast from 'react-hot-toast'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error,query) => {
      if(query.state.data !== undefined) {
        toast.error(`Something went wrong: (${error.message})`)
      }
    }
  })
})


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
