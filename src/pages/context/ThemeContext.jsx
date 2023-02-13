import React,{useState,useEffect,createContext, Children} from "react";

 const getIntialThem = () => {
    if (typeof window !== 'undefined' && window.localStorage){
        const storedPrefs = window.localStorage.getItem('color-theme')
        if (typeof storedPrefs === 'string'){
            return storedPrefs
        }

        const userMedia = window.matchMedia('(profers-color-scheme:dark)')
        if (userMedia.matches){
            return 'dark'
        }
    }
    return 'light'
 }

 export const ThemeContext = createConstext() 

 export const ThemeProvider = ({initialTheme,childern}) =>{
    const []=useState(getIntialThem)

    const rawSetThem = (theme) =>{
        const root = window.document.documentElement;
        const isDark = theme === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(theme)

        localStorage.setItem('color-theme',theme)
    } 
    if (initialTheme){
         rawSetThem(initialTheme)
    }
    useEffect(()=>{
        rawSetThem(theme)
    },[theme])

    return(
        <ThemeContext.ThemeProvider value={{theme,SetThem}}>
                {Children}
        </ThemeContext.ThemeProvider>
    )
 }





