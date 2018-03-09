 # -*- coding: utf-8 -*
 #爬取 凹凸吧套图https://www.tuao8.com/

from multiprocessing.pool import Pool
import requests,os
from bs4 import BeautifulSoup


def parse_page(html):
    try:
        img = (html.select('#container > main > article > div.entry')[0].p.img['src'])
        return img
    except:
        return None

def get_html(url):
    r = requests.get(url)
    s = BeautifulSoup(r.content, 'lxml')
    return s

def get_count(url):
    count=len((get_html(url)).select('#container > main > article > div.entry > ul > li' ))
    return count-1
def get_title(url):
    html=(get_html(url))
    title = html.select('h1.title')[0].get_text()
    return title
def write(url,path,num):
    if url:
        with open(path+str(num)+'.jpg','wb') as f:
            f.write(requests.get(url).content)
def main(url):
    num=100+int(url[(url.find('=')+1):])
    img_url=parse_page(get_html(url))
    print(num,PATH,img_url)
    write(img_url,PATH,num)

url='https://www.tuao8.com/post/860.html'
title=get_title(url)
#PATH='G:\Python\爬虫\图片下载\凸凹吧\\'+title+'\\'
PATH='/Users/zhalice/Desktop/Python学习/凹网图片下载/'+title+'/'

if __name__ == '__main__':
    if os.path.isdir(PATH):
        pass
    else:
        os.mkdir(PATH)
        count=get_count(url)
        pool=Pool()
        pool.map(main,[url+'?pagenum='+str(i) for i in range(1,count+1)])