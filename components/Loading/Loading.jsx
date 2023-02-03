import Shuriken from 'icon/Shuriken';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Paragraph from 'Shares/Paragraph';
import Span from 'Shares/Span/Span';
import Title from 'Shares/Title';
import { spinner_wrapper, spinner, spinner2, progress_loader, progress } from './loading.module.css'

export const Loading = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setLoading(false);
        // const handleComplete = (url) => (url === router.asPath) && setTimeout(() => {setLoading(false)}, 5000);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })

    return loading && (
        <>
            <div className={spinner_wrapper}>
                {/* <div className={spinner}>
                    <Shuriken />
                </div> */}
                <div className={spinner2}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Paragraph>Estamos recuperando los datos</Paragraph>
                <Span>No demoraremos mucho</Span>
                <div class={progress_loader}>
                    <div class={progress}></div>
                </div>
            </div>
        </>
    );
}
