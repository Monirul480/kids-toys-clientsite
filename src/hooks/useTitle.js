
import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `KidsHippo/#${title}`;
    })
}

export default useTitle;

