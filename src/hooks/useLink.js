import {useQuery} from 'react-query'

const API_URL = 'https://api.shrtco.de/v2/'

const useLink = link => {
  const fetchUrls = async () => {
    const shorten = `shorten?url=${link}`
    const res = await fetch(`${API_URL}${shorten}`)
    return res.json()
  }

  const {data, isLoading, isError, refetch, isRefetching} = useQuery(
    'links',
    fetchUrls,
    {
      refetchOnWindowFocus: false,
      enabled: false,
      // refetchOnMount: false,
    },
  )
  
  // console.log(data)
  return {data, isLoading, isRefetching, isError, refetch}
}

export default useLink
