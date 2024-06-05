/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aulaz20;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Aulaz20 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner(System.in);
    
    int[] numeros = {12, 45, 18, 23, 31, 19, 54};
    
    String[] frutas = {"Laranja", "Abacaxi", "Maçã"};    
    Arrays.sort(numeros);
            
        System.out.println(Arrays.toString(numeros));
        
        Arrays.sort(frutas,Comparator.reverseOrder());
    
        System.out.println(Arrays.toString (frutas));
    }
    
}
