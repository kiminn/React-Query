import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Todo from './pages/todo';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

// config 옵션을 넣을 수 있음 : 자동완성! staleTime 옵션 / 기본 옵션 default Option을 설정하는 공간
const queryClient = new QueryClient({
    // mutationCache: {
    //     onMutate: () => {},
    // },
    // queries: {
    //   // 전역으로 옵션을 바꾸고 싶은 부분을 수정 가능합니다.
    //   staleTime: Infinity,
    //   retry: 3, 
    // },
  queryCache: new QueryCache({
    onError: (error) => {
      // 전역 에러핸들링
      console.log("error:", error)
    }
  })
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Todo />
        </QueryClientProvider>
    );
}

export default App;
