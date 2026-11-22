// 状态筛选（渐进增强）：没有 JS 时按钮组保持隐藏，所有问题全部可见。
(function () {
  var group = document.querySelector('.filter');
  if (!group) return;

  var buttons = group.querySelectorAll('button');
  var questions = document.querySelectorAll('.question');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.dataset.filter;
      buttons.forEach(function (other) {
        other.setAttribute('aria-pressed', String(other === button));
      });
      questions.forEach(function (question) {
        question.hidden = filter !== 'all' && question.dataset.status !== filter;
      });
    });
  });

  group.hidden = false;
})();
