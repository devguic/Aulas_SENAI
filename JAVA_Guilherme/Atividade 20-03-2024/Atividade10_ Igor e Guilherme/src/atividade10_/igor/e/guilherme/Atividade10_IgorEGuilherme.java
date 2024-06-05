/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade10_.igor.e.guilherme;

/**
 *
 * @author dev_noite
 */
public class Atividade10_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    
    int ano=1800;
    double resto3, resto, resto2;
    
        do {            
            
            
          
            resto3 = ano % 4;
          
            resto2 = ano % 400;
            resto = ano % 100;
            
            
     if (((resto3 == 0 && resto != 0)) || (resto2 == 0)) {
                
                System.out.println("O ano " + ano + " é bissexto");
              
     } 

            
            
            
             ano++;
                  
        } while (2030 > ano);
    
    
        }}
   
    

