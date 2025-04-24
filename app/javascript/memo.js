function post(){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  })
};

// ページが読み込まれたときにポスト関数が実行される
window.addEventListener('turbo:load', post);