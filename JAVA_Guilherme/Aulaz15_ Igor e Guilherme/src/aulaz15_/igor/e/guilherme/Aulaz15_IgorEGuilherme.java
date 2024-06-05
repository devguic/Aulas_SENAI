/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aulaz15_.igor.e.guilherme;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Aulaz15_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
   
    
    Scanner ler = new Scanner(System.in);
    
    double num1, num2, result=0;
    int opt;
          
    
        System.out.print("Informe um número: ");
        num1 = ler.nextDouble();
        
         System.out.print("Informe outro número: ");
        num2 = ler.nextDouble();
        
        System.out.println("------------------- Menu de cálculos -------------------");
        
        System.out.println("1. SOMAR --------------------------------------------");
        System.out.println("2. SUBTRAIR --------------------------------------------");
        System.out.println("3. MULTIPLICAR --------------------------------------------");
        System.out.println("4. DIVIDIR --------------------------------------------");
        System.out.println(" --------------------------------------------");
        System.out.print(" => ");
        opt = ler.nextInt();
                switch (opt) {
            case 1:
                result = num1 + num2;
                break;
            case 2:
                result = num1 - num2;
                break;
            case 3:
                result = num1 * num2;
                break;
            case 4:
                result = num1 / num2;
     
                break;
            default:
                System.out.println(" Opção Inválida!! ");
                break;
        }
        if (opt <= 4 && opt > 0) {
                
            System.out.println("O resultado é " + result);
        } else {
            System.out.println("");
        }
        
             
        
    
    }
    
}
