/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade3_.igor.e.guilherme;

import java.util.Scanner;

/**
 *
 * @author Aluno_Manha
 */
public class Atividade3_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner (System.in);
    double num1, num2, c, soma;
    
    
    System.out.println("Informe o primeiro número");
    num1 = ler.nextDouble();
    
    System.out.println("Informe o segundo número");
    num2 = ler.nextDouble();
   
    soma = num1 + num2;
    
    
    
    
        if (soma > 20) {
            
            c = soma + 8;
            
            System.out.println(" O resultado " + c);
            
        } else { 
            c= soma - 5;
            System.out.println(" O resultado " + c); 
        }
           
                    
              
    
    }
    
}
