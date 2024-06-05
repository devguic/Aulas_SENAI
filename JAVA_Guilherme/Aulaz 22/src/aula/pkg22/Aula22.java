/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aula.pkg22;

import java.util.Arrays;
import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Aula22 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
         String [] Animals = {"micoleaodourado","ganso","garnize","alpaca","jubiscreusou"};
         
         Arrays.sort(Animals);
         Scanner ler = new Scanner(System.in);
         
         String busca;
         
         System.out.println("nome do animals ");
         System.out.println("=>");
         busca = ler.next();
         
         
          int result = Arrays.binarySearch(Animals, busca);
         
         System.out.println(result);
         
         if (result>= 0) {
             System.out.println("o bicho existe!!");
            
        } else {
             System.out.println("o bicho não existe!!");
    }
    
    }
}