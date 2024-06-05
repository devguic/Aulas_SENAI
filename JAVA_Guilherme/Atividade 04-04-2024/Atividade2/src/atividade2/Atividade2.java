/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade2;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade2 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
        Scanner ler = new Scanner(System.in);
    Calculadora cacio = new Calculadora();
    int escolha;
    
        System.out.println("Informe um número");
        cacio.a = ler.nextInt();
        
        System.out.println("Informe outro número");
        cacio.b = ler.nextInt();
        
        System.out.println("Informe: ");
        System.out.println("1- soma ");
        System.out.println("2- subtração ");
        System.out.println("3- divisão ");
        System.out.println("4- multiplicação ");
        System.out.println("5- resto ");
        
        escolha = ler.nextInt();
        
        switch (escolha) {
            case 1:
                
                cacio.soma(escolha);
                
                break;
                case 4:
                
                cacio.multiplicacao(escolha);
                
                break;
                case 2:
                
                cacio.subtracao(escolha);
                
                break;
                case 3:
                
                cacio.divisao(escolha);
                
                break;
                case 5:
                
                cacio.resto(escolha);
                
                break;
            default:
                System.out.println("Opção Inválida");
        }
    
    
    
    
    
    }
    
}
