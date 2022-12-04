function valide(){
    document.getElementById("B").onclick = reponse
    }
  function valide2(){
    document.getElementById("loupe").onclick = reveal
    }
    
  
  function reponse(){
    var compteur = 0
    var V = document.getElementsByClassName("V")
    for (var i=0 ; i<V.length ; i++){
      var a = V[i].children[0]
  
      if (a.value==a.id){
        V[i].style.backgroundColor="green"
        compteur += 1 
          if (compteur == 87){
             document.getElementById("confetti").style.visibility='visible'
    }
      }
      else if (a.value!=""){
        V[i].style.backgroundColor="red"
      }
    }
    
  }
  function caché(){
    document.getElementById("confetti").style.visibility='hidden'
    document.getElementById("rep").style.visibility='hidden'
  }
  function reveal(){
    document.getElementById("rep").style.visibility='visible'
  }
  
  window.onload = caché 
  