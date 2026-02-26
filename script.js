function setLang(lang){
    document.querySelectorAll("[data-lang]").forEach(el=>{
        el.style.display="none";
    });

    document.querySelectorAll("[data-lang='"+lang+"']").forEach(el=>{
        el.style.display="block";
    });
}

window.onload=function(){
    setLang("ru");
}
