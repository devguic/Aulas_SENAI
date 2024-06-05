/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade2_.guilherme.e.igor;

import java.util.Scanner;

/**
 *
 * @author Aluno_Manha
 */
public class Atividade2_GuilhermeEIgor {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner (System.in);
    double num1, num2, c;
    
    
    System.out.println("Informe o primeiro número");
    num1 = ler.nextDouble();
    
    System.out.println("Informe o segundo número");
    num2 = ler.nextDouble();
   
    
    
    
    
    
        if (num1 == num2) {
            
            c = num1 + num2;
            
            System.out.println(" a soma dos números é " + c);
            
        } else { 
            c= num1 * num2;
            System.out.println(" a multiplicação dos números é " + c); 
        }
           
                    
    }          
    }
