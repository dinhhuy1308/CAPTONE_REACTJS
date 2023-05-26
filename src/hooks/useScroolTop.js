import { useEffect } from "react"


export const useScroolTop = () => {
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}