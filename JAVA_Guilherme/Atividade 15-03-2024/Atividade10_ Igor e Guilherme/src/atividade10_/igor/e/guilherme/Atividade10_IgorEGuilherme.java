/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade10_.igor.e.guilherme;

import java.util.Scanner;

/**
 *
 * @author Aluno_Manha
 */
public class Atividade10_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
   
    Scanner ler = new Scanner (System.in);
     
 double reais, litros;
 double preco = 5.54;
 
        System.out.println(" Quantos reais de gasolinha, chefe? ");
        reais = ler.nextDouble();
        
        litros = reais / preco;
        
        System.out.println(" Deu para colocar " + litros + " litros no tanque");
       
        
       
        
 
    
    }
    
}
