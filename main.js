function checkResult() {
    const name = document.getElementById('name').value;
    const lovedPerson = document.getElementById('loved_person').value;

    if (!name || !lovedPerson) {
        alert('请填写完整信息');
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

    const probability = Math.floor(Math.random() * 100).toFixed(2);
    const resultMessage = `你喜欢的人喜欢你的概率是：${probability}%`;

    if (probability > 90) {
        resultMessage += '看来那么很有缘呢！加油不要放弃！------By GPT5.0';
    } else if (probability >= 10 && probability <= 60) {
        resultMessage += '或许有的时候放弃会更简单一些…------By GPT5.0';
    }

    alert(resultMessage);
    uploadResult(name, lovedPerson, probability);
}

function uploadResult(name, lovedPerson, probability) {
    const hiddenFrame = document.getElementById('hidden_frame');
    hiddenFrame.src = 'uploadResult.py?name=' + encodeURIComponent(name) + '&loved_person=' + encodeURIComponent(lovedPerson) + '&probability=' + encodeURIComponent(probability);
}
