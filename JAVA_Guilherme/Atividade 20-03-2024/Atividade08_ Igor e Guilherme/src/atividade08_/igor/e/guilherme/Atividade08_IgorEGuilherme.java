/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade08_.igor.e.guilherme;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade08_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
   
    Scanner ler = new Scanner(System.in);
        
      double num2, num=0;
    double media;
    
        do {            
            
            System.out.print("Escreva um número ou 0 para sair: ");
            num2 = ler.nextInt();
              
             media = (num2 + num)/ 2;
             
             System.out.println("A média dos números digitados é: " + media);
            
             num = num2;
        } while (num != 0);
    
    
    
    }
    
}
