import{S as m,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",d="48325012-3ccc1b5d8b9c25a12d61b57d7",y=i=>{const r=new URLSearchParams({key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${r}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},h=i=>i.map(({webformatURL:r,largeImageURL:s,tags:l,likes:e,views:t,comments:o,downloads:f})=>`
      <li class="gallery-item">
	<a class="gallery-link" href="${s}">
		<img 
			class="gallery-img" 
			src="${r}" 
			alt="${l}" 
			/>
	</a>
    <ul class="gallery-info-list">
                    <li class="info-list-item">
                        <h2 class="info-list-title">Likes:</h2>
                        <p class="info-list-text">${e}</p>
                    </li>
                    <li class="inform-item">
                        <h2 class="info-list-title">Views:</h2>
                        <p class="info-list-text">${t}</p>
                    </li>
                    <li class="info-list-item">
                        <h2 class="info-list-title">Comments:</h2>
                        <p class="info-list-text">${o}</p>
                    </li>
                    <li class="info-list-item">
                        <h2 class="info-list-title">Downloads:</h2>
                        <p class="info-list-text">${f}</p>
                    </li>
                </ul>
    </li>
    `).join(""),u=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),a=document.querySelector(".loader");a.style.display="none";const g=new m(".js-gallery a",{captionsData:"alt",captionDelay:250,className:"simple-lightbox"}),b=i=>{i.preventDefault(),a.style.display="block",n.innerHTML="";let r=i.currentTarget.elements.user_query.value.trim();if(r===""){a.style.display="none",c.warning({title:"Caution",message:"You forgot important data",position:"topRight"});return}y(r).then(s=>{if(s.total===0){c.error({title:"",messageColor:"#FFFFFF",messageSize:16,messageLineHeight:1.5,backgroundColor:"#EF4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML=" ",u.reset();return}n.insertAdjacentHTML("beforeend",h(s.hits)),g.refresh()}).catch(s=>{console.log(s.message)}).finally(()=>{a.style.display="none",i.target.reset()})};u.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
