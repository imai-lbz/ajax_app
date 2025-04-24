const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html =`
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post(){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = ()=>{
      if (XHR.status != 200){
        alert('Error ${XHR.status}: ${XHR.statusText}');
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
};

// ページが読み込まれたときにポスト関数が実行される
window.addEventListener('turbo:load', post);