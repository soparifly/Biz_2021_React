const fetchLogin = async (userid, password) => {
  const res = await fetch('http://localhost:8080/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    //   sesstion 을 부여함 nodejs에서는 ture 여기서는 include
    credentials: 'include',
    body: JSON.stringify({
      userid: account.userid,
      password: account.password,
    }),
  });
  //   if (res) { } 연산으로 res 상태를 확인한다
  //res는 서버가 멈춰있을때 null 또는 undefinded 상태이다 (res.ok에서 오류가 발생)
  //    ES6+ 버젼 에서 safe null 검사를 수행하는 코드가있다
  // res 가 정상 이면 .ok 속성을 검사한다
  // null 로인한 오류를 방지하는 코드
  if (res?.ok) {
    const userResult = await res.json();
    console.log('userid', account.userid);
    console.log('user', userResult);
    //   const user = users.find((item) => {
    //     return item.userid === account.userid;
    //   });
    if (!userResult?.userid) {
      alert('아이디가 없음');
      return;
    }
    if (userResult.password !== account.passowrd) {
      alert('비번오류');
      return;
    }
    alert('로그인성공');
    setUser(userResult);
  }
};
