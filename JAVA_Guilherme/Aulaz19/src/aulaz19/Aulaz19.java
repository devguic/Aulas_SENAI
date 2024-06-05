/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aulaz19;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Aulaz19 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner (System.in);
    int qtde, i=0, e=0;
    
    
        System.out.println("Quantos produtos deseja cadastrar?");
        qtde = ler.nextInt();
        
    String[] produtos = new String [qtde];
    
        do {     
            
            System.out.println("Informe um produto");
            produtos[i] = ler.next();
            i++;
            
        } while (i < produtos.length);
        
        System.out.println("Os produtos cadastrados foram: ");
        
        do {            
            System.out.println(produtos[e]); 
            e++;
        } while (e < produtos.length);
    
    
    
    
    }
    
}
