/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividade2;

/**
 *
 * @author dev_noite
 */
public class Gerente extends Empregado {
    
    private String departamento;
   
    
    public Gerente(){
    
}
      public Gerente(String nome, double salario, String departamento){
          super(nome, salario);
          this.departamento = departamento;
                 
    
}
      
    @Override
      public void exibirInfo(){
         
          System.out.println("---------Gerente-----------");
          super.exibirInfo();
          System.out.println("Departamento: " + departamento);
          System.out.println("---------------------------");
      }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }
    
}
