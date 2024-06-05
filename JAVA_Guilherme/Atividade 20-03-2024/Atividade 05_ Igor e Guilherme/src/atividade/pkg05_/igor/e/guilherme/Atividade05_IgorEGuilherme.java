/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade.pkg05_.igor.e.guilherme;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade05_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    String produtos;
    double preco, precoatual = 0, barato = 1000;
    int num = 0;
     Scanner ler = new Scanner (System.in);
    
        do {            
           
            System.out.println(" Qual o nome do produto? ");
            produtos = ler.next();
                    
            System.out.println(" Qual é o preço do produto? ");
            preco = ler.nextDouble();
            
            System.out.print(produtos + " R$");
            System.out.println(preco);
            
            if (preco < barato && preco > precoatual) {
                
                barato = preco;
                precoatual = preco;
                
            } 
            
            
            else if (preco < barato) {
                
                barato = preco;
                
            } else if (preco > precoatual) {
                
                precoatual = preco;
               
            }
{
            }
            
            num++;
            
        } while (15 > num);
    
    
        System.out.println("O produto mais barato é R$" + barato + " E o mais caro é R$" + precoatual);
        
        
    }
    
}
