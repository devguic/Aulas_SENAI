/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade_10;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade_10 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    
    Scanner ler = new Scanner(System.in);
    
    int qtde = 6, acertos = 0;
    int [] premio = new int [qtde];
    int i = 0, l = 0, p = 0;
    int [] tentativa = new int [qtde];
    
    
        do {  
            
          premio [i] = (int) (Math.random() * 60 + 1);
          
         i++;
            
        } while (i < qtde);
        
        
        
        do {  
            
            p = l+1;
            System.out.println("Faça a " + p + "ª tentativa");
            tentativa [l] = ler.nextInt();
            
            for (int j = 0; j < qtde; j++) {
                
                if (tentativa [l] == premio [j]) {
                    
                    acertos++;
                    
                }
                
            }
            
            l++;
            
        } while (l < qtde);
    
    
        
    
            
        
    
        System.out.println(" Você acertou " + acertos);
        
        if (acertos == 6) {
            
            System.out.println("Parabéns você gastou sua sorte em um jogo que não vale nada");
            
        } else {
            
            System.out.println(" Não foi desta vez");
        }
    
    }
    
}
