/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aulaz18;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Aulaz18 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner(System.in);
    
        System.out.println("Quantos números deseja cadastrar? ");
        int qtde = ler.nextInt();
    
    
    int[] numeros = new int [qtde];
    
        for (int i = 0; i < numeros.length; i++) {
            
            System.out.print("Digite o número " + i + " : ");
            numeros[i] = ler.nextInt();
            
        }
    System.out.println("Os números cadastrados foram");
        for (int i = 0; i < numeros.length; i++) {
            System.out.println(numeros [i]);
            
        }
    
    }
    
}
