// Executado inline antes do primeiro paint: aplica o tema salvo (ou o do
// sistema, com escuro como padrão) e marca que há JS para os efeitos de reveal.
export const THEME_SCRIPT = `(function(){var d=document.documentElement;d.classList.add("js");try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}d.classList.toggle("light",t==="light")}catch(e){}})();`;
