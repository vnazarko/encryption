## Документация для ASCII Шифрования и Дешифрования

### Введение
Модуль ASCII Шифрования и Дешифрования предоставляет функции для шифрования и дешифрования текста с использованием простого шифра на основе сдвига. Этот модуль позволяет пользователям кодировать и декодировать текстовые сообщения путем сдвига значений ASCII символов.

### Использование
Для использования модуля ASCII Шифрования и Дешифрования выполните следующие шаги:

1. Включите модуль в свой проект.
2. Вызовите функцию `encrypt` для шифрования нужного текста.
3. Вызовите функцию `decrypt` для дешифрования зашифрованного текста.

### Методы

#### `encrypt(text, shiftKey)`
- **Описание:** Шифрует заданный текст с использованием шифра ASCII на основе сдвига.
- **Параметры:**
  - `text`: Текст для шифрования.
  - `shiftKey`: Количество позиций для сдвига значений ASCII символов.
- **Возвращает:** Зашифрованный текст.

#### `decrypt(encryptedText, shiftKey)`
- **Описание:** Дешифрует заданный зашифрованный текст с помощью указанного ключа сдвига.
- **Параметры:**
  - `encryptedText`: Текст для дешифрования.
  - `shiftKey`: Количество позиций для возврата к исходным значениям ASCII символов.
- **Возвращает:** Дешифрованный текст.

### Пример
```javascript
// путь/до/модуля
export const ASCII = {
    encrypt: (text, shiftKey) => {
        let encryptedText = '';
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            charCode += shiftKey;
            encryptedText += String.fromCharCode(charCode);
        }
        return encryptedText;
    },
    decrypt: (encryptedText, shiftKey) => {
        let decryptedText = '';
        for (let i = 0; i < encryptedText.length; i++) {
            let charCode = encryptedText.charCodeAt(i);
            charCode -= shiftKey;
            decryptedText += String.fromCharCode(charCode);
        }
        return decryptedText;
    },
}

// main.js

import { ASCII } from 'путь/до/модуля'

const plaintext = "Привет, Мир!";
const shift = 3;
const encryptedText = ASCII.encrypt(plaintext, shift);
console.log("Зашифрованный:", encryptedText); // Вывод: "Стрзйч/Плу&"
const decryptedText = ASCII.decrypt(encryptedText, shift);
console.log("Дешифрованный:", decryptedText); // Вывод: "Привет, Мир!"
```

