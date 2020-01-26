from selenium import webdriver
from selenium.webdriver.support.ui import Select
import json
from selenium.webdriver.firefox.options import Options

options = Options()
options.headless = True

base_site='https://pollfinder.sos.state.mn.us/Street.aspx?ModeType=1&ZipCode='

browser = webdriver.Firefox()
data=[]

precinct=""
loc=""
adr=""
candidates=[]
zips=[55414,55455,55454,55114,55413,55401,55415]


loop_var=0
while loop_var<len(zips):
    browser.get(base_site+str(zips[loop_var]))
    print(str(100*loop_var/len(zips))+"% + zips")
    loop_var+=1

    select = Select(browser.find_element_by_id('ctl00_MainContent_ddlStreets'))
    options = select.options
    num_options=0
    for option in options:
        num_options+=1

    i = 0

    while i<num_options:
        print(str(100*i/num_options)+"% + streets")
        dict={}

        select = Select(browser.find_element_by_id('ctl00_MainContent_ddlStreets'))
        select.select_by_index(i)


        browser.find_element_by_id("ctl00_MainContent_btnZip").click()

        if(len(browser.find_elements_by_id("ctl00_MainContent_gvHouseNumberSelection")) ==0):
            #find precinct name
            precinct=browser.find_element_by_id("ctl00_MainContent_lblPrecinctName").text
            loc=(browser.find_element_by_id("ctl00_MainContent_lblPPBuildingName").text)
            adr=(browser.find_element_by_id("ctl00_MainContent_lblPPAddr1").text+browser.find_element_by_id("ctl00_MainContent_lblPPCityStateZip").text)

            if(len(candidates) ==0 ):
                browser.find_element_by_id("ctl00_MainContent_btnMyBallot").click()
                table=browser.find_element_by_id("ctl00_MainContent_gvMyBallot")
                rows=table.find_elements_by_tag_name("tr")
                num_r=len(rows)
                k=1
                while k<num_r :
                    candidate={}
                    cells=rows[k].find_elements_by_tag_name("td")
                    candidate["office"] = cells[0].find_elements_by_tag_name("span")[0].text
                    candidate["name"] = cells[1].find_elements_by_tag_name("span")[0].text
                    candidate["party"] = cells[2].text
                    candidates.append(candidate)
                    k+=1
                browser.back()

        else:
            table=browser.find_element_by_id("ctl00_MainContent_gvHouseNumberSelection")
            rows=table.find_elements_by_tag_name("tr")
            num_r=len(rows)
            j=1
            while j<num_r and j<11:
                cells=rows[j].find_elements_by_tag_name("td")
                cells[0].find_elements_by_tag_name("a")[0].click()

                name=(browser.find_element_by_id("ctl00_MainContent_lblPrecinctName").text)
                if name not in precinct:
                    precinct=name
                    loc=(browser.find_element_by_id("ctl00_MainContent_lblPPBuildingName").text)
                    adr=(browser.find_element_by_id("ctl00_MainContent_lblPPAddr1").text+browser.find_element_by_id("ctl00_MainContent_lblPPCityStateZip").text)

                    if(len(candidates) ==0 ):
                        browser.find_element_by_id("ctl00_MainContent_btnMyBallot").click()
                        table=browser.find_element_by_id("ctl00_MainContent_gvMyBallot")
                        rows=table.find_elements_by_tag_name("tr")
                        num_r1=len(rows)
                        k=1
                        while k<num_r1 :
                            candidate={}
                            cells=rows[k].find_elements_by_tag_name("td")
                            candidate["office"] = cells[0].find_elements_by_tag_name("span")[0].text
                            candidate["name"] = cells[1].find_elements_by_tag_name("span")[0].text
                            candidate["party"] = cells[2].text
                            candidates.append(candidate)
                            k+=1
                        browser.back()
                browser.back()
                table=browser.find_element_by_id("ctl00_MainContent_gvHouseNumberSelection")
                rows=table.find_elements_by_tag_name("tr")
                j+=1

        browser.back()
        i+=1
        dict["precinct"]=precinct
        dict["location"]=loc
        dict["address"]=adr
        dict["candidates"]=candidates
        data.append(dict)


with open('precincts.json', 'w') as outfile:
    json.dump(data, outfile)
