/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividade2;

/**
 *
 * @author dev_noite
 */
public class Empregado {
    
    protected double salario;
    protected String nome;
    
    
    public Empregado() {
    
}
        public Empregado(String nome, double salario) {
            
            this.nome = nome;
            this.salario = salario;
    
}
        public void exibirInfo(){
            
            System.out.println("Nome: " + nome);
            System.out.println("Salário: " + salario);
        }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
    
    
}
