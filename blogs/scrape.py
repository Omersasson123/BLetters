import os
from selenium import webdriver

driver = webdriver.Chrome(os.getcwd()+'/chromedriver')
driver.get("http://www.paulgraham.com/articles.html")

pages = driver.find_elements_by_xpath('//a')
links = []
for p in pages:
  links.append(p.get_attribute('href'))

links = links[4:197]
links = links[::-1]

file1 = open("links.txt","a")
for l in links:
  file1.write(l)
  file1.write("\n")
file1.close()