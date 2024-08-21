import '@/app/globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header' 
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className="bg-home bg-auto w-full absolute z-[-1] h-[1300px]"></div>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
