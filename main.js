function checkResult() {
    const nameInput = document.getElementById('name');
    const lovedPersonInput = document.getElementById('loved_person');
    const name = nameInput.value.trim();
    const lovedPerson = lovedPersonInput.value.trim();

    if (!name || !lovedPerson) {
        if (!name) {
            nameInput.value = '请填写';
            nameInput.style.color = 'red';
        }
        if (!lovedPerson) {
            lovedPersonInput.value = '请填写';
            lovedPersonInput.style.color = 'red';
        }
        return;
    }

    if (name === lovedPerson) {
        alert('检测姓名一样，请不要自恋');
        return;
    }

    if (name === '王毅轩' && lovedPerson === '汪琪玥') {
        alert('你喜欢的人喜欢你的可能性为0%，抱歉看到这个结果，希望你可以找到更好的-----By GPT5.0');
        return;
    }

    const probability = Math.floor(Math.random() * 101).toFixed(2);
    let message = `你喜欢的人喜欢你的概率是：${probability}%`;

    if (probability > 90) {
        message += '看来那么很有缘呢！加油不要放弃！------By GPT5.0';
    } else if (probability >= 10 && probability <= 60) {
        message += '或许有的时候放弃会更简单一些…------By GPT5.0';
    }

    alert(message);
    saveResultToGithub(name, lovedPerson, probability);
}

function saveResultToGithub(name, lovedPerson, probability) {
    const fileContent = `${name},${lovedPerson},${probability}%`;
    // 调用uploadResult.js中的代码，将fileContent作为参数传递
}
