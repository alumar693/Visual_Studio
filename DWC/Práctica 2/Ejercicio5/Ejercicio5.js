class SecurePassword {
    static generate() {
        let passwordStrength = [];
        for (let i = 0; i < 10; i++) {
            passwordStrength.push(Math.floor(Math.random() * 5) + 1);
        }

        for (let i = 0; i < passwordStrength.length; i++) {
            console.log('*'.repeat(passwordStrength[i]));
        }
    }
}

SecurePassword.generate();
