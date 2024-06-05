/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade5_.igor.e.guilherme;

import java.util.Scanner;

/**
 *
 * @author Aluno_Manha
 */
public class Atividade5_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner (System.in);
    String Funcionario;
    double venda1;
    double meta = 1500;
    
    
    System.out.println("Qual seu nome");
    Funcionario= ler.next();
    
    System.out.println("Informe suas vendas");
    venda1 = ler.nextDouble();
    
    
    
    
    
    
    
        if (venda1 >= meta) {
            
            System.out.println(Funcionario + " Ganhou!");
            
        } else 
            
            System.out.println(Funcionario + " não Ganhou!");
       
        
              
    
    
    }
    
    
}
