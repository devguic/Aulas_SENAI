/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade8;

import java.util.Arrays;
import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade8 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner (System.in);
     
    int cont = 0;
    char [] vogais = {'a', 'e', 'i', 'o', 'u'};
    String frase;
    
        System.out.println("Escreva uma frase ou palavra: ");
        frase = ler.nextLine().toLowerCase();
        
       
        
        for (int i = 0; i < frase.length(); i++) {
            
            for (char vogal : vogais) {
                if (frase.charAt(i) == vogal){
                    cont++;
                break;
                }
            }
            
        }
    
        System.out.println("A frase possui " + cont + " vogais");
    
    
    }
    
}
