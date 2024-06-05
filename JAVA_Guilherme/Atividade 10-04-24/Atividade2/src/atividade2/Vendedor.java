/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividade2;

/**
 *
 * @author dev_noite
 */
public class Vendedor extends Empregado {
  
  
    private double percentual;
   
  public Vendedor(){
      
      
  }  
  public Vendedor(String nome, double salario, double percentual){
      super(nome, salario);
      this.percentual = percentual;
    
  } 
  public double CalcularSalario(){
      
     return super.salario + (super.salario * percentual);
      
  }
    @Override
   public void exibirInfo(){
            
            System.out.println("--------------Vendedor------------");
            System.out.println("Nome: " + nome);
            System.out.println("Salário: " + CalcularSalario());
            System.out.println("----------------------------------");
        }

    public double getPercentual() {
        return percentual;
    }

    public void setPercentual(double percentual) {
        this.percentual = percentual;
    }
 
    
}
