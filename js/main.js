// В файле main.js напишите несколько вспомогательных функций, которые пригодятся вам в следующих заданиях. Функции не обязательно писать с нуля, можно найти готовые в интернете, разобраться в них и добавить к себе в проект. Только не забудьте указать ссылку на источник!

// Задание считается выполненным, если в проекте описаны следующие функции:

// Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции:

// имя_функции(от, до); // Результат: целое число из диапазона "от...до"
// Учтите, что диапазон может быть только положительный, включая ноль. А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.

const getRandomFromRange = (min, max) => {
  let switcher;
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max) {
    switcher = min;
    min = max;
    max = switcher;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRandomFromRange(8, 4);

// Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна. Пример использования функции:

// имя_функции(проверяемая_строка, максимальная_длина); Результат: true, если строка проходит по длине, и false — если не проходит

const getMaxLength = (line, maxLength) => line.length <= maxLength;

const lines = 'оо';
const length = 3;
getMaxLength(lines, length);
