import { QueryClient, useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';

const todo2 = () => {
    // const { data, isLoading, isError } = useQuery({
    //     queryKey: ['todo'], // "어떠한 key로 데이터의 결과값이나 요청을 저장할 것인가"
    //     queryFn: () => axios.get('https://jsonplaceholder.typicode.com/todos/1'),
    //     // , {
    //     //     Headers: {
    //     //         AUthorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiand0IiwiaWR4Ijo0LCJpYXQiOjE3MDU0ODg5ODcsImV4cCI6MTcwNTY4ODk4N30.pODj-dLgcoY2snjHdBoJkuuwHr5As8y-biHQlT1Jz30`,
    //     //     },
    //     // }), //axiosData넣어주면됨
    // });

    const queryClient = new QueryClient();
    const data = queryClient.getQueryData(['todo']);
    console.log("data", data);

    useEffect(() => {
        console.log('Test2');
    }, []);
    return <div>todo2</div>;
};

export default todo2;
