// btnというidを持つHTML要素を取得し、定数に代入をする
const btn = document.getElementById('btn');

// textというidを持つHTMLを取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click' , () => {
  // text要素を「ボタンをクリックしました」に変更する
  text.textContent ='ボタンをクリックしました';  
});