/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aula05_guilherme.e.igor;

import java.util.Scanner;

/**
 *
 * @author Aluno_Manha
 */
public class Aula05_GuilhermeEIgor {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner (System.in);
     float n1, n2, n3;
     float media;
     
     
        System.out.print("Digite o valor: ");
        n1 = ler.nextFloat();
        System.out.print("Digite o valor: ");
        n2 = ler.nextFloat();
        System.out.print("Digite o valor: ");
        n3 = ler.nextFloat();
        
        media = (n1 + n2 +n3)/3;
        
        System.out.println("A média é: " + media);
        
        if (media >= 7) {
            System.out.println(" A média é maior ou igual a 7");
        } else if (media >= 3 && media <= 6) {  
          
            System.out.println("A média está entre 3 e 6");
            
        } else {
            System.out.println("A média é menor que 3");
        }
        
    }
    
}
