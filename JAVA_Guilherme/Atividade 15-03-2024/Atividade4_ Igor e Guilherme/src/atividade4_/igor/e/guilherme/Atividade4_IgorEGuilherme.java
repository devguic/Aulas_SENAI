/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade4_.igor.e.guilherme;

import java.util.Scanner;

/**
 *
 * @author Aluno_Manha
 */
public class Atividade4_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
     Scanner ler = new Scanner (System.in);
     
 String letra;
 String vogal = "aeiou";
 
        System.out.println(" Escreva uma letra ");
        letra = ler.next();
        
        
        if (vogal.contains(letra)) {
            System.out.println(letra + " é vogal ");
        } else {
            System.out.println(letra + " é consoante");
        }
   
             
      
    
    
    
    
    
    
    
    
    
    
    
    
    }
   
}
