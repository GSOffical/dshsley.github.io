import requests
import os
import sys
from urllib.parse import unquote

def upload_result(name, loved_person, probability):
    token = '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'
    headers = {'Authorization': f'token {token}'}
    url = 'https://api.github.com/repos/GSOffical/dshsley.github.io/contents/.result'

    content = f'{name},{loved_person},{probability}'
    data = {
        'message': 'Upload test result',
        'content': content.encode('utf-8').hex(),
    }

    response = requests.put(url, headers=headers, json=data)
    if response.status_code == 201:
        print('上传成功')
    else:
        print('上传失败')

if __name__ == '__main__':
    query = unquote(sys.argv[1]).split('?')[1]
    name = query.split('&')[0].split('=')[1]
    loved_person = query.split('&')[1].split('=')[1]
    probability = query.split('&')[2].split('=')[1]
    upload_result(name, loved_person, probability)
