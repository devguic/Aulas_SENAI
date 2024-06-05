/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aula3_.igor.e.guilherme;

import java.util.Scanner;

/**
 *
 * @author Aluno_Manha
 */
public class Aula3_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
   
    Scanner ler = new Scanner (System.in);
    
    int num1, num2, total;
    String nome;
    
        System.out.print("Informe seu nome: ");
        nome = ler.nextLine(); 
        //next somente uma palavra nextLine são várias palavras
        
        
        System.out.print("Informe um número: ");
        num1 = ler.nextInt();
        System.out.print("Informe um número: ");
        num2 = ler.nextInt();
    
        
        System.out.println (nome);
        
        total = num1 + num2;
        System.out.println(total); 
        
        
   
        
        
    }
    
}
