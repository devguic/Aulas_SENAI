/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade7_.igor.e.guilherme;

import java.util.Scanner;

/**
 *
 * @author Aluno_Manha
 */
public class Atividade7_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner (System.in);
     
 String nome;
 double peso, altura, imc;
 
        System.out.println(" Qual seu nome? ");
        nome = ler.next();
        
        
        System.out.println(" Qual é o seu peso em KG? ");
       peso = ler.nextDouble();
        
        System.out.println(" Qual é a sua altura em Metros? ");
        altura = ler.nextDouble();
        
        imc = peso / (altura * altura);
        
        if (imc <= 18.5) {
            
            System.out.println(nome + " Você está abaixo do peso!");
            
        } else if (imc > 18.5 && imc<25) {
            
            System.out.println(nome + " Você está no peso ideal! Parabéns gostosão");
            
        } else if (imc >= 25 && imc<30) {
            
            System.out.println(nome + " Você está acima do peso, dois meses de academia devem resolver!");
            
        }else 
            System.out.println(nome + " Você está obeso, gordão!");
            
        
       
        }
       
    
    
    
    }
    

