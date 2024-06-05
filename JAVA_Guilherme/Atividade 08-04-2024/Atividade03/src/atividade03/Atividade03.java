/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade03;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade03 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner(System.in);
    double aumento;
    
        
        
        Empregado empregadoteste = new Empregado ("Gabriela","Santos", 20000.00);
    
    empregadoteste.exibirEmpregado();
    
        System.out.println("Quantos % de aumento ");
        empregadoteste.aumento(aumento = ler.nextDouble());
        
        empregadoteste.exibirEmpregado();
    
    }
    
}
