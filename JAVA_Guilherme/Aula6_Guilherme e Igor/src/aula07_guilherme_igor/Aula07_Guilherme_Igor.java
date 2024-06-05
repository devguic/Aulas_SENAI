/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aula07_guilherme_igor;

import java.util.Scanner;

/**
 *
 * @author Aluno_Manha
 */
public class Aula07_Guilherme_Igor {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
        Scanner ler =  new Scanner(System.in);
        
        String palavra =  "exemplo", word;
    
        System.out.println("Informe a palavra");
        word = ler.next().toLowerCase();
        
        if (word.equals(palavra)) {
            System.out.println("Você acertou S2");
            
        } else {
                 System.out.println("Você errou!! ;-;");
        }
    }
    
}
