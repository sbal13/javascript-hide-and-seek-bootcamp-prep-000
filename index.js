function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested, .target')
}

function increaseRankBy(n){
  var  list = document.querySelectorAll('.ranked-list, li')

  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + 1
  }
}

function deepestChild(){
  var deepest = document.querySelector('#grand-node div div div div')

  return deepest
  
}

