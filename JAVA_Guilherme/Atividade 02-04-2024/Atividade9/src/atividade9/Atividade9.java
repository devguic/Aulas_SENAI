/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade9;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade9 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
   
    Scanner ler = new Scanner(System.in);
    
    int iguais = 0;
    int par = 0;
    int resto;
    int maior = 0;
    int i = 0;
    int qtde;
        System.out.print("Quantos números deseja digitar?  ");
        qtde = ler.nextInt();
        
    Integer [] num = new Integer [qtde];
    
        do {            
            
            System.out.println(" Escreva um número ");
            num [i] = ler.nextInt();
            
            resto = num [i] % 2;
            if (resto == 0) {
                
               par++;
                
            }
            
            if (num [i] >= maior) {
                
               maior = num [i];
                
            }
            
            
            
            i++;
            
        } while (i < qtde);
        
        
        for (int x = 0; x < qtde; x++) {
            
                
                
                for (int j = x+1; j < qtde; j++) {
                   
                    
                    if (num [x] == num[j]) {
                        
                        System.out.println("O número " + num [x] + " tem um igual");
                        
                    }
                    
                }
                    
                
                        
                
            }
       
        System.out.println(" O número total de pares é " + par);
        System.out.println(" O maior número é " + maior);
       
    
    
    }
    
}
