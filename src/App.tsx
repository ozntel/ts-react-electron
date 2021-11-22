import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './router/Router';

const cacheTime = 1000 * 60 * 60 * 6;
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: false,
            cacheTime: cacheTime,
            staleTime: cacheTime,
        },
    },
});

function AppContent() {
    return <Router />;
}

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AppContent />
        </QueryClientProvider>
    );
}
