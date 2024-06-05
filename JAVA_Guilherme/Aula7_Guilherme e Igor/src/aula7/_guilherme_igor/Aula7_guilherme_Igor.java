/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aula7._guilherme_igor;

import java.util.Scanner;

/**
 *
 * @author Aluno_Manha
 */
public class Aula7_guilherme_Igor {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner (System.in);
    String palavra = "aula";
           String letra;
    
           System.out.println("Informe uma letra ");
           
           
    letra = ler.next().toLowerCase();
           
           
        if (palavra.contains( String.valueOf(letra))) {
            
            System.out.println("A letra " + letra + " informada tem na palavra " + palavra);
        } else {
            
            System.out.println("A letra " + letra + " não tem na palavra " + palavra );
        }
        
    
    }
    
   
    
           
           
    
           
    
    
}
