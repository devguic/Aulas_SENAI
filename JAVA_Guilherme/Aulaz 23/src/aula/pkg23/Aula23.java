/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aula.pkg23;

import java.util.Arrays;
import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Aula23 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
         String [] Animals = {"micoleaodourado","ganso","garnize","alpaca","jubiscreusou"};
         
         Arrays.sort(Animals);
         Scanner ler = new Scanner(System.in);
         
         String busca;
         boolean result = false;
         System.out.println("nome do animals ");
         System.out.println("=>");
         busca = ler.next().toLowerCase();
         
         
         for (String Animal : Animals) {
             if (Animals.equals(busca)) {
                 result = true;
                 
             }
        }
         if (result = true) {
             System.out.println("o bicho" + Animals + "existe!!");
            
        } else {
             System.out.println("o bicho" + Animals + "não existe!!");
    }
        
    }
    
}
