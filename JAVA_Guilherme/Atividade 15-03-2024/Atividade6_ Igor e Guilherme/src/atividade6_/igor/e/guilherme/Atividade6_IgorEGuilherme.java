/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade6_.igor.e.guilherme;

import java.util.Scanner;

/**
 *
 * @author Aluno_Manha
 */
public class Atividade6_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
   Scanner ler = new Scanner (System.in);
     
 String nome, estado, sexo;
 String mulher = "fF";
 String compromisso = "CdcD";
  int anos;
 
        System.out.println(" Escreva seu nome ");
        nome = ler.next();
        
        System.out.println(" Qual seu sexo Masculino (M), Feminino (F)");
        sexo = ler.next();
        
        System.out.println(" Qual seu estado civil Casada (C) e Solteira (S)? ");
        estado = ler.next();
        
        
        
        if (mulher.contains(sexo) && compromisso.contains (estado)) {
            System.out.println(" Quantos anos de casada?");
            anos = ler.nextInt();
                    
                   System.out.println (nome + " Obrigado! Amo casadas, principalmente quando tem " + anos + " anos casada"); 
            
        } else {
            System.out.println("Obrigado!");     
        
    }
    
    }}
