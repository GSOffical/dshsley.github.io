import requests
import os

def upload_result(name, loved_one, probability):
    token = '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'
    headers = {
        'Authorization': f'token {token}',
        'Content-Type': 'application/json'
    }
    data = {
        'name': name,
        'loved_one': loved_one,
        'probability': probability
    }
    url = 'https://api.github.com/repos/GSOffical/dshsley.github.io/contents/.result'
    response = requests.put(url, headers=headers, json=data)
    if response.status_code == 201:
        print('上传成功')
    else:
        print('上传失败')

if __name__ == '__main__':
    name = input('请输入你的名字：')
    loved_one = input('请输入你喜欢的人：')
    probability = input('请输入概率：')
    upload_result(name, loved_one, probability)
