import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { NotificationProvider } from '../../context/NotificationContext';
import { SidebarProvider } from '../../context/SidebarContext';
import { UserContextProvider } from '../../context/UserContext';
import '../../styles/globals.css';
const queryClient = new QueryClient();

// If loading a variable font, you don't need to specify the font weight
const nunito = Plus_Jakarta_Sans({ subsets: ['latin'] });
function App({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <NotificationProvider>
          <UserContextProvider>
            <main className={`${nunito.className} dark`}>
              <Component {...pageProps} />
            </main>
          </UserContextProvider>
        </NotificationProvider>
      </SidebarProvider>
    </QueryClientProvider>
  );
}

export default App;
