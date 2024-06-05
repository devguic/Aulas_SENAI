/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aula21;

import java.util.Arrays;
import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Aula21 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
       
         double[] valores = {23.56, 534.99, 11.99, 199.90, 28.88};
         
         Arrays.sort(valores);
         Scanner ler = new Scanner(System.in);
         
         double busca;
         
         System.out.println("digite um preço: ");
         System.out.println("=>");
         busca = ler.nextDouble();
         
         
         int result = Arrays.binarySearch(valores, busca);
         
         System.out.println(result);
         
         if (result>= 0) {
             System.out.println("o valor existe!!");
            
        } else {
             System.out.println("o valor não existe!!");
        }
    }
    
}
