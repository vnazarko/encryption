const ASCII = {
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
