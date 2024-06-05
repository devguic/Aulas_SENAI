/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade7;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade7 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner(System.in);
    
    int qtde = 3, i = 0, somapar = 0, somaimpar = 0;
    int [] num = new int [qtde];
    
        do {            
            
            System.out.println("Informe um valor");
            num [i] = ler.nextInt();
            
            int resto = num [i] % 2;
            if (resto == 0) {
                
                somapar =+ num [i];
               
            } else {
                
                somaimpar =+ num [i];
            }
          i++;  
        } while (i < qtde);
        System.out.println("A soma dos números pares é " + somapar);
        System.out.println("A soma dos números ímpares é " + somaimpar);
    
    }
    
}
