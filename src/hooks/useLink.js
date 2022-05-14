import {toast, Toaster} from 'react-hot-toast'
import {useQuery} from 'react-query'
import {onlineManager} from 'react-query'


const API_URL = 'https://api.shrtco.de/v2/'
const useLink = link => {
  const fetchUrls = async () => {
    const shorten = `shorten?url=${link}`
    const res = await fetch(`${API_URL}${shorten}`)
    return res.json()
  }
  const isOnline = onlineManager.isOnline()

  const {
    data,
    isLoading,
    isFetching,
    isError,
    refetch,
    isRefetching,
    isPaused,
  } = useQuery('links', fetchUrls, {
    refetchOnWindowFocus: false,
    enabled: false,
  })

  return {data, isLoading, isRefetching, isError, refetch, isFetching, isPaused,isOnline}
}

export default useLink
