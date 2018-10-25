/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.parcial.controllers;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import edu.eci.arsw.parcial.services.HttpConnection;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author 2110111
 */
@RestController
@RequestMapping("/climate")
public class ClimateController {

   @Autowired
    private HttpConnection m;
    
   /**
    * 
    * @param city
    * @return 
    */
    @RequestMapping(path="/{city}",method = RequestMethod.GET)
    public StringBuffer getCityClimate(@PathVariable String city) {
 
        try {
            return m.getCityData(city);
        } catch (IOException ex) {
            Logger.getLogger(ClimateController.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }     
      
}