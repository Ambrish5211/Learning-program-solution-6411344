package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.model.Country;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.w3c.dom.*;

@Service
public class CountryService {

    public Country getCountry(String code) {
        List<Country> countryList = getCountriesFromXML();

        return countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }

    private List<Country> getCountriesFromXML() {
        List<Country> countries = new ArrayList<>();

        try {
            File file = ResourceUtils.getFile("classpath:country.xml");
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document doc = builder.parse(file);
            NodeList nodeList = doc.getElementsByTagName("country");

            for (int i = 0; i < nodeList.getLength(); i++) {
                Node node = nodeList.item(i);
                if (node.getNodeType() == Node.ELEMENT_NODE) {
                    Element elem = (Element) node;
                    String code = elem.getElementsByTagName("code").item(0).getTextContent();
                    String name = elem.getElementsByTagName("name").item(0).getTextContent();
                    countries.add(new Country(code, name));
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return countries;
    }
}
