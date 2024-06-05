/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aulaz27;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Aulaz27 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Pessoa p1 = new Pessoa ();
        p1.nome = "João Marcos";
        p1.contato = "(31) 97535-3623";
        p1.cpf = "123.456.789.90";
        p1.cidade = "Belo Horizonte";
        
        
        Pessoa p2 = new Pessoa ();
        p2.nome = "Marcos da Silva";
        p2.contato = "(31) 93434-7070";
        p2.cpf = "987.654.321.10";
        p2.cidade = "Macacos";
   
        p1.exibirPessoa();
        p2.exibirPessoa();
    }
    
}
