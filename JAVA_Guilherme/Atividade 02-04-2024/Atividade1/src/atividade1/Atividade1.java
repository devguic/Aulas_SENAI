/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade1;

import java.util.Arrays;
import java.util.Comparator;
import static java.util.Comparator.reverseOrder;
import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        // TODO code application logic here
    
   int qtde = 3;
   Integer [] num = new Integer [qtde];
   Scanner ler = new Scanner(System.in);
   int escolha;
   int soma = 0;
   
   int i = 0;
         
   do{
    
       System.out.println(" Informe um número: ");
       num [i] = ler.nextInt();
       i++;
      
    } while (i < qtde);
            
            
    
        System.out.println("Digite 0 para sair, 1 para a lista de ordem direta, 2 para a lista em ordem inversa e 3 a soma total dos valores");
        escolha = ler.nextInt();
        
        switch (escolha) {
            case 0:
               
                break;
            case 1:
                for (int e = 0; e < qtde; e++) {
                    
                    System.out.println(num [e]);
                    
                }
                break;
            case 2:
                
               Arrays.sort(num, Comparator.reverseOrder());
               
               for (int e = 0; e < qtde; e++) {
                    
                    System.out.println(num [e]);
                    
                } 
               
            break;
            
            case 3:
                for (int e = 0; e < qtde; e++) {
                    
                    soma += num [e];
                    
                }
            
                System.out.println("A soma é " + soma);
                break;
            default:
                System.out.println("O número é inválido");
        }
        
    }
    
    
    
    
    
    
    
    
    }
    

