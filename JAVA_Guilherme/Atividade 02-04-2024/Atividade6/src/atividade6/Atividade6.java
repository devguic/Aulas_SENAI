/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade6;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade6 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner (System.in);
    
    int qtde = 3, i = 0, x, y, soma = 0;
    Integer[] num = new Integer [qtde];
    
        do {            
            
            System.out.println("Informe um número");
            num [i] = ler.nextInt();
            i++;
        } while (i < qtde);
    
        System.out.println("Informe o primeiro valor que deseja somar");
        x = ler.nextInt();
        System.out.println("Informe o segundo valor que deseja somar");
        y = ler.nextInt();
        
        
        soma = num [x] + num [y];
        
        System.out.println("A soma é " + soma);
    }
    
}
