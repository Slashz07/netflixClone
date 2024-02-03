let answers = document.getElementsByClassName('query')
answers = Array.from(answers);
let addSymbol = document.getElementsByClassName('faqBox')
addSymbol = Array.from(addSymbol);
console.log(addSymbol);
answers.map((elem) => {
  elem.onclick = () => {
    let ans = elem.children[1];
    // console.log(ans);
    if (ans.style.maxHeight) {
      ans.style.maxHeight = null;
      ans.style.opacity = 0;
      ans.addEventListener('transitionend', function handler(){
        ans.style.padding = 0;
        ans.removeEventListener('transitionend', handler);
      });
    } else {
      ans.style.maxHeight = ans.scrollHeight + 80 + "px";
      ans.style.opacity = 1;
      ans.style.padding = '17px 31px 13px 23px';
    }
  }
})

addSymbol.map((elem) => {
  elem.onclick = () => {
  let add = elem.children[1];
  let addSymbol = add.firstElementChild;
    if (addSymbol.style.rotate=='0.25turn') {
      addSymbol.style.rotate = 0 + 'turn';
    } else {
      addSymbol.style.rotate = 0.25 + 'turn';
    }
  }
})