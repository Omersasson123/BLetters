import os
from selenium import webdriver

driver = webdriver.Chrome(os.getcwd()+'/chromedriver')
driver.get("https://pmarchive.com/")

pages = driver.find_elements_by_xpath('//a')
article_links = []
for p in pages:
    article_links.append(p.get_attribute('href'))

article_links = article_links[1:11] # just the first 9 articles
article_links = article_links[::-1]

# links for paragraphs in the first article
paragraphs1 = driver.find_elements_by_xpath('//p') # this is the part I'm not sure of
paragraphlinks1 = []
for par in paragraphs:
    paragraphlinks.append(par.get_attribute('href'))

paragraphlinks1 = paragraphlinks[1:85]
paragraphlinks1 = paragraphlinks[::-1]

# links for paragraphs in the second article
#paragraphs2 = driver.find_elements_by_xpath('//p')
#paragraphlinks1 = []
#for par in paragraphs:
#    paragraphlinks.append(par.get_attribute('href'))
#
#paragraphlinks1 = paragraphlinks[1:85]
#paragraphlinks1 = paragraphlinks[::-1]


file1 = open("pmarchivelinks.txt", "a")
for l in article_links:
    file1.write(l)
    file1.write("\n")
file1.close()

file = open("pmarchivelinks.txt", "a")
for l in article_links:
    file.write(l)
    file.write("\n")
file.close()

file1 = open("pmarchivelinks.txt", "p")
for p in paragraphlinks1:
    file1.write(p)
    file1.write("\n")
file1.close()
