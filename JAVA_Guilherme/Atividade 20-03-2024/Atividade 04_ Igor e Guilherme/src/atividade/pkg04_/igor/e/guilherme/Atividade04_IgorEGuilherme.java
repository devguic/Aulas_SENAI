/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade.pkg04_.igor.e.guilherme;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade04_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    int num = 0;
    Scanner ler = new Scanner (System.in);
        
       
                
        while (num < 10) {            
            
            
            
            num++;
             
            if (num > 5)
             System.out.println("O número " + num + " é maior que 5: " + num);
            else 
                System.out.println("O número " + num + " é menor que 5: " + num);
        
        }
        
        System.out.println("Tem 5 menores que 5 e tem 5 números maiores que 5");
    
    
    }
    
}
