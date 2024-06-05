/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade4;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade4 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner(System.in);
    
    int qtde = 10, i=0;
    int [] num = new int [qtde];
    int maior = 0, menor = 10000;
    
        do {            
            
            System.out.println("Informe um número");
            num [i] = ler.nextInt();
            
            if (num [i] > maior && num [i] < menor) {
                
             maior = num [i];
             menor = num [i];
             }
                if (num [i] > maior) {
                    
                    maior = num [i];
                    
                }
                if (num [i] < menor) {
                    
                    menor = num [i];
                }
                
             
            
            i++;
        } while (i < qtde);
        
        
        System.out.println("O maior número é " + maior);
        System.out.println("O menor número é " + menor);
    
    
    }
    
}
