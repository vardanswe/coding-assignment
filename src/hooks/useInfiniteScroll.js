import { useEffect } from 'react';

const useInfiniteScroll = (loadMore, fetchStatus) => {
    useEffect(() => {
        const handleScroll = () => {
            const nearBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200;
            if (nearBottom && fetchStatus !== 'loading') {
                loadMore();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loadMore, fetchStatus]);
};

export default useInfiniteScroll;
