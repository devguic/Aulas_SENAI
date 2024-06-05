/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade06_igor.e.guilherme;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade06_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    
        Scanner ler = new Scanner(System.in);
        
    String nomes;
    int num,contabh=0, contanl=0, segue=0;
    
    
        do {            
          
            System.out.println("Qual seu nome? ");
            nomes = ler.next();
            
            System.out.println("Digite (1) se sua cidade natal for Nova Lima e (2) se for de outra cidade  ");
            num = ler.nextInt();
            
            segue++;
               
            if (num == 1) {
                
                contanl++;
                
            } else {
                
                contabh++;
            }
            
        } while (10 > segue);
       
   
        System.out.println("O número de pessoas de Nova Lima é " + contanl);
         System.out.println("O número de pessoas de outras regiões é " + contabh);
        
    
    }
    
}
