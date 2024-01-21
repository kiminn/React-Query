OnSuccess

데이터를 재호출하지않는다. 캐싱하고있기 때문에 props drilling이 일어나지않음!

getTodos 리액트 투두를 가지고오는 것

쿼리 값이 배열인이유는 boolean 값일 때 true false 
더많은 데이터를 키값으로 삼아서 저장하기 위함 캐싱!


리액트쿼리는 편리하다.
state관리에 대한 편의성 (UI바뀔때마다 다시 재랜더링 해줘야함)
useEffect 안써도됨

datafetcing에 대한 결과값

블로그 작성글 같은거는 캐싱해야합니다. 저장!
실시간으로 불러오는 경우는 데이터를 캐싱하면안됨 (staleTime 유효하지않ㅎ도록만들어서)

staleTime -> 0 기본값  ---- useQuery를 만났을 때 다시 데이터를 불러옴
cacheTime -> 5분 ---- 내가 얼만큼 저장을 하고 있을지? - 마이페이지 같은 것 




Queries
Query Options {
    queryKey,
    staleTime 설정가능
}

use-query에서 mutation: 오직 편의성!에 의해서만 사용하고 axios와 다를 바 없음
-> 오직 편의성
mutate는 무조건 상단에서 처리를 해주어야한다.

mutateAsync는 await에 걸린다.
모든 줄이 걸린다 onSuccess도 타고..

button disabled={isPending}


mutateAsync를 더 많이쓰는 이유 로직을 동기적으로 처리할 수 있음. await이 가능하기 때문에.!

불필요한 요청을 줄이는 것은 반드시 필요한 것! - 의무

invalidateQueries = refetch() 같다 그러나 리액트쿼리 공홈에서는 전자를 권장한다.



!!! 리액트 쿼리를 연달아 사용할 때 좋다.
enabled : 특정한 값이 오고나서 실행해라!

a -> b(a) -> c

a =3 
3이라는 값을 true로 바꿔줌
!!a -> true

if(!!a) -> a에 값이 있으면?이라는 뜻

a, b, c, ab, ac, ab
리액트의 데이터는 자잘자잘하게 캐싱되어있는 것이 좋음 (-> )


v5부터는 onSuccess와 onError가 사라졌다.

queryKey: [params]

useEffect(() => {
    if(!data) {

    }
},[data])

// 낙관적(긍정적) 업데이트
// 99.99%
onMutate: (data) => {
    // data iterable = undefined //null필요
    queryClient.setQueryData(["todo", null], (oldData) => [...oldData.data, data])
}

Suspense fallback={<div>Loading...</div>}
suspense 옵션이 걸려있지않으면 !를 쓰면안된다.

data!
-> 무조건있다 assertion
-> ? 있을수도 있다.
-> !를 쓸때는 Suspense를 걸어주는 것이 좋습니다.
-> !나 ?를 쓰지않아도 타입스크립트에서는 타입세이프티 환경이니까 괜찮다. 데이터를 불러왔다는 것을 보ㅗ장

로딩으로 onSuccess onError~~

&& ? -> 쓸필요가 없다.! assertion 을하니까
타입세이프티한 환경이란, 자동완성이된다.