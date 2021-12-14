
function showContent(params) {
  let content = document.getElementById("content")
  
  if(content.hasAttribute("hidden")){
    content.removeAttribute("hidden")
  }
  else content.setAttribute("hidden" , "")
  
}


function pagaOnline(params) {
  window.location.pathname = '/ui/pagamento/pagamento.html'
}