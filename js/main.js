
document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu-btn"), mobile=document.querySelector(".mobile-menu");
  if(menu&&mobile) menu.addEventListener("click",()=>{mobile.classList.toggle("open");menu.setAttribute("aria-expanded",mobile.classList.contains("open"))});
  document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>mobile?.classList.remove("open")));
  const filters=document.querySelectorAll(".filter"), cards=document.querySelectorAll("[data-category]");
  filters.forEach(btn=>btn.addEventListener("click",()=>{
    filters.forEach(x=>x.classList.remove("active"));btn.classList.add("active");
    const cat=btn.dataset.filter;
    cards.forEach(card=>card.hidden=cat!=="all"&&card.dataset.category!==cat);
  }));
  const form=document.querySelector("#contact-form");
  if(form) form.addEventListener("submit",e=>{
    e.preventDefault();
    const name=form.querySelector("[name=name]").value.trim(), email=form.querySelector("[name=email]").value.trim(), message=form.querySelector("[name=message]").value.trim();
    const subject=encodeURIComponent("Website inquiry from "+name);
    const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href=`mailto:faysal.talukder36@gmail.com?subject=${subject}&body=${body}`;
  });
});
