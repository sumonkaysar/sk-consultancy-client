import { useEffect } from "react"

const useTitle = title => {
  useEffect(() => {
    document.title = `${title} - SK Consultancy`;
  }, [title])
}

export default useTitle;