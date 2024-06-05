/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade8_.igor.e.guilherme;

import java.util.Scanner;

/**
 *
 * @author Aluno_Manha
 */
public class Atividade8_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner (System.in);
     
 double altura, comprimento, area;
 
        System.out.println(" Qual é a altura do terreno em m²? ");
        altura = ler.nextDouble();
        
        
        System.out.println(" Qual é o comprimento do terreno em m²?");
       comprimento = ler.nextDouble();
        
       
        
        area = altura * comprimento;
    
        
        System.out.println("A área do terreno é " + area + "m²");
    
    
    
    
    
    
    
    }
    
}
