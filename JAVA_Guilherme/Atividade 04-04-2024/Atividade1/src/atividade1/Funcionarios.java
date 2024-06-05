/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividade1;

/**
 *
 * @author dev_noite
 */
public class Funcionarios {
    
    String nome;
    String departamento;
    Double salario;
    String dataDeEntrada;
    String rg;
    
    void recebeAumento (double porcentMeta){
        
     salario += salario * (porcentMeta/100);
     
        System.out.println("Seu novo salário é: R$");
        
        
    }
    void calculaGanhoAnual (){
        
        double ganhoAnual = salario*12;
        System.out.println("O ganho anual é: R$" + ganhoAnual);
    }
    void exibirTudo(){
        
        System.out.println("nome: " + nome);
        System.out.println("Departamento: " + departamento);
        System.out.println("Salário: " + salario);
        System.out.println("data de entrada: " + dataDeEntrada);
        System.out.println("RG: " + rg);
        this.calculaGanhoAnual();
        
    }
}
