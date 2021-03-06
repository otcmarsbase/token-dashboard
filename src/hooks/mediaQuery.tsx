import { useEffect, useState, useDebugValue } from "react";

export const Queries = {
    mobile: '(max-width: 768px)',
    tablet: '(max-width: 1433px)',
    desktop: '(max-width): 1920px)'
}

export const useMediaQuery = (query: string): boolean => {
    const getMatches = (query: string): boolean => {
        if (typeof window !== 'undefined') {
            return window.matchMedia(query).matches
        }
        return false
    }

    const [matches, setMatches] = useState<boolean>(getMatches(query))

    function handleChange() {
        setMatches(getMatches(query))
    }

    useEffect(() => {
        const matchMedia = window.matchMedia(query)

        handleChange()

        if (matchMedia.addListener) {
            matchMedia.addListener(handleChange)
        } else {
            matchMedia.addEventListener('change', handleChange)
        }

        return () => {
            if (matchMedia.removeListener) {
                matchMedia.removeListener(handleChange)
            } else {
                matchMedia.removeEventListener('change', handleChange)
            }
        }
    }, [query])

    return matches
}