//変数numに1以上の正の数を代入する
let num = 13

//変数numが３と５の倍数の場合は「３と５の倍数です」と文字列を出力する
if (num % 3 === 0 && num % 5 === 0) {
  console.log('３と５の倍数です');
}

//変数numが3の倍数の場合は「3の倍数です」と文字列を出力する
else if (num % 3 === 0) {
    console.log('３の倍数です');
}

//変数numが５の倍数の場合は「5の倍数です」と文字列を出力する
else if (num % 5 === 0 ) {
  console.log('5の倍数です');
}
//それ以外の場合は、変数numの値を出力する
else {
  console.log(num);
}