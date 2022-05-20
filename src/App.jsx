import {React,useState} from 'react'
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
  const [isDark,setDark] = useState(false)
  return (
    <>
      <div className={`grid h-screen place-items-center grid-rows-3 gap-5 ${!isDark ? 'bg-hero-pattern' : 'bg-dark-hero-pattern'} bg-scroll ${isDark ? 'dark' : ''} `}>
        <h1 className="font-bold lg:text-6xl text-4xl dark:text-white">Shorty</h1>
        <QueryClientProvider client={queryClient}>
          <Form />
        </QueryClientProvider>
        <Footer setDark={setDark}/>
      </div>
    </>
  )
}

export default App
