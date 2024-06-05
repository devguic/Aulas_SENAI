/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade3;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner (System.in);
    int qtde = 10;
    int i = 0;
    int valores = 0;
    Integer [] num = new Integer [qtde];
    
    
    
        do {            
            
            System.out.println("Informe um número");
            num [i] = ler.nextInt();
            valores++;
            i++;
        } while (i < qtde);
            
    
        System.out.println("Eu tenho " + valores + " números");
    
    }
    
}
