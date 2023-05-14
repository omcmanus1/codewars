function likeDislike(buttons) {
  let answer = "Nothing";
  buttons.forEach((button) => {
    if (button === answer) answer = "Nothing";
    else answer = button;
  });
  return answer;
}

console.log(likeDislike(["Like", "Dislike", "Dislike", "Like"]));
