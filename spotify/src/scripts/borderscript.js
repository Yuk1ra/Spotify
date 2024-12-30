// Налаштування кольорів
const colors = {
    color1: '#ff0000', // Початковий колір
    color2: '#0000ff'  // Другий колір
  };
  
  // Функція для оновлення кольорів анімації
  function updateColors(newColor1, newColor2) {
    const header = document.getElementById('animated-header');
    colors.color1 = newColor1;
    colors.color2 = newColor2;
  
    header.style.animation = 'none'; // Зупиняємо анімацію для оновлення
    setTimeout(() => {
      header.style.borderImageSource = `linear-gradient(90deg, ${colors.color1}, ${colors.color2})`;
      header.style.animation = 'borderAnimation 3s linear infinite';
    }, 10);
  }
  
  // Приклад виклику: Зміна кольорів через 5 секунд
  setTimeout(() => {
    updateColors('#00ff00', '#ff00ff');
  }, 5000);