const fetchLogin = async (account, password) => {
  const res = await fetch('http://localhost:8080/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      userid: account.userid,
      password: account.password,
    }),
  });
  if (res?.ok) {
    const userResult = await res.json();
    console.log('userid', account.userid);
    console.log('user', userResult);
    if (!userResult?.userid) {
      alert('아이디가 없음');
      return;
    }
    if (userResult.password !== account.passowrd) {
      alert('비번오류');
      return;
    }
    alert('로그인성공');
    //setUser(userResult);
  }
};
