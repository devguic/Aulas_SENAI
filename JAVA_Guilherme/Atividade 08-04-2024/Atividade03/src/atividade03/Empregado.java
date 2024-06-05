/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividade03;

/**
 *
 * @author dev_noite
 */
public class Empregado {
 
  private String nome;
  private String sobrenome;
  private double salario;
  
  public Empregado (String nome, String sobrenome, double salario){
    
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.salario = salario;
      
  }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }
    public void aumento (double aumento){
        
        this.salario = salario + (salario*(aumento/100));
        
    }
    public void exibirEmpregado (){
        
        System.out.println("------------------------------");
        System.out.println("| Nome: " + nome + " " + sobrenome + "|"); 
        System.out.println("| Salário Anual: " + (salario*12) + "|");
        System.out.println("------------------------------");
        
        
    }
  
  
    
    
    
}
