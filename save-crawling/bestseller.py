# 교보문고 베스트 셀러 크롤링
from re import I
from typing import OrderedDict
from urllib.request import urlopen
from bs4 import BeautifulSoup
import json
import urllib.request
import urllib
import os

from matplotlib.pyplot import text
from numpy import append

html = urlopen("http://www.kyobobook.co.kr/bestSellerNew/bestseller.laf")
bsObject = BeautifulSoup(html, "html.parser")
file_data = OrderedDict()
# 베스트셀러 리스트
book_list = bsObject.body.find("ul", {"class" : "list_type01"})
# 베스트셀러 정보
book_contents = book_list.findAll("div", {"class" :  "detail"})
# 제목
title = [i.find("div", {"class" : "title"}).find("strong").text for i in book_contents]
# 저자
author = [i.find("div", {"class" : "author"}).text[24 : 26] for i in book_contents]

# BestSeller.json 파일 생성
# a = []
# with open('BestSeller.json', 'a+', encoding='UTF-8') as make_file:
#   for i in range(len(title)) :
#     text = []
#     file_data["title"] = title[i]
#     file_data["author"] = author[i]
#     text = json.loads(json.dumps(file_data, ensure_ascii=False))
#     a.append(text)
#   json.dump(a, make_file, ensure_ascii=False)


# 이미지 가져오기
img = book_list.find("img")["src"]
print(img)
urllib.request.urlretrieve(img, str(os.getcwd())+'/save-crawling'+'/test'+'.jpg')
print(os.getcwd())