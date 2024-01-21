import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const Todo = () => {
    //useQuery
    const { data, isLoading, isError } = useQuery({
        queryKey: ['todo'], // "어떠한 key로 데이터의 결과값이나 요청을 저장할 것인가"
        queryFn: () => axios.get('https://jsonplaceholder.typicode.com/todos/1'),
        // , {
        //     Headers: {
        //         AUthorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiand0IiwiaWR4Ijo0LCJpYXQiOjE3MDU0ODg5ODcsImV4cCI6MTcwNTY4ODk4N30.pODj-dLgcoY2snjHdBoJkuuwHr5As8y-biHQlT1Jz30`,
        //     },
        // }), //axiosData넣어주면됨
    });
    // useEffect function axios 쟇호출
    useEffect(() => {
        console.log('Test');
    }, []);
    console.log(data, isLoading, isError);

    // useEffect function axios 쟇호출
    useEffect(() => {
        console.log('Test');
    }, []);
    console.log(data, isLoading, isError);

    return <div>:)</div>;

    //리액트쿼리는 자동으로 데이터를 중복으로 호출해도 캐싱되기때문에 자식컴포넌트에서도 불필요한 요청없이 데이터를 호출할 수 있다.
};

export default Todo;
