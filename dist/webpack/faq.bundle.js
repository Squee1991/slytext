(()=>{function e(e){return e=2,function(){e++,console.log(e)}}document.querySelectorAll(".circle-el").forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".faq-row").querySelector(".parent"),c=t.querySelector(".row-text"),s=e.querySelector(".vertical-line");if(t.classList.toggle("active"),t.classList.contains("active")){c.style.maxHeight="1000px";const e=c.clientHeight;c.style.maxHeight=`${e}px`,s.classList.add("active")}else c.style.maxHeight="0",s.classList.remove("active")}))}));const t=e(0),c=e(0);t(),c(),c(),c(),fetch("https://jsonplaceholder.typicode.com/users/").then((e=>e.json())).then((e=>console.log(e)))})();