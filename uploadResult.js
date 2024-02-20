const nodegit = require('nodegit');
const path = require('path');
const fs = require('fs');

const repoUrl = 'https://github.com/GSOffical/dshsley.github.io/blob/main/.result'; // 替换为你的GitHub仓库URL
const localPath = path.join(__dirname, 'result');
const fileName = '.result';
const fileContent = ''; // 将测试结果保存到fileContent变量中

fs.writeFileSync(path.join(localPath, fileName), fileContent);

nodegit.Clone(repoUrl, localPath)
    .then(repo => {
        const commitMessage = 'Add test result';
        const index = repo.index();
        index.addByPath(fileName);
        index.write();
        return index.writeTree();
    })
    .then(oid => {
        const head = repo.getHead();
        const parent = head.target();
        const author = nodegit.Signature.default(repo);
        const committer = nodegit.Signature.default(repo);
        return repo.createCommit('HEAD', author, committer, commitMessage, parent, [oid]);
    })
    .then(() => {
        console.log('Test result uploaded successfully');
    })
    .catch(err => {
        console.error('Error uploading test result:', err);
    });
